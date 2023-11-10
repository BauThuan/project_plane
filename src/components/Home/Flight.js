import React, { useEffect, useState } from "react";
import { getApiProvinceService } from "../services/ConfigService";
import {
  AiOutlineArrowRight,
  AiFillCaretRight,
  AiOutlineClose,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { BiPlus, BiErrorAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ModalSelectPeople from "../Modal/ModalSelectPeople";
import { useDispatch } from "react-redux";
import { RoundTrip, OneWay, ManyCities } from "../Redux/Action";
import "../../styles/root.scss";
import "../../styles/Flight.scss";

const Flight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const languageEN = useSelector((state) => state.languageEN);
  const [checkRadio, setCheckRadio] = useState("Khứ hồi");
  const [selectedOption, setSelectedOption] = useState("Phổ thông");
  const [checkBox, setCheckBox] = useState({
    checkA: false,
    checkB: false,
    checkC: false,
  });
  const [listRoundTrip, setListRoundTrip] = useState({
    addressStart: "",
    addressEnd: "",
    startTime: "",
    endTime: "",
    adult: "",
    children: "",
    cabin: "",
  });
  const [listOneWay, setListOneWay] = useState({
    addressStart: "",
    addressEnd: "",
    startTime: "",
    adult: "",
    children: "",
    cabin: "",
  });
  const [listAddNewPlane, setListAddNewPlane] = useState([]);
  const [provice, setProvice] = useState();
  const [start, setStart] = useState(false);
  const [errorColor, setErrorColor] = useState(false);
  const [errorArriveColor, setErrorArriveColor] = useState(false);
  const [errorTimeColor, setErrorTimeColor] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isShowModalSelectPeople, setIsShowModalSelectPeople] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const handleOptionFlightMethod = (type) => {
    setCheckRadio(type);
    setListAddNewPlane([]);
    setNumberOfAdults(0);
    setNumberOfChildren(0);
    setSelectedOption("Phổ thông");
    setListRoundTrip({
      addressStart: "",
      addressEnd: "",
      startTime: "",
      endTime: "",
      adult: "",
      children: "",
      cabin: "",
    });
    setListOneWay({
      addressStart: "",
      addressEnd: "",
      startTime: "",
      adult: "",
      children: "",
      cabin: "",
    });
    setProvice();
    setShowModal(false);
  };
  const handleCheckBoxIsTrue = (type) => {
    setCheckBox({ ...checkBox, [type]: true });
  };

  const handleOptionStartTime = (type) => {
    setStart(type);
  };

  const handleAddNewFlight = () => {
    let newArr = [...listAddNewPlane];
    newArr.push({
      from: "",
      arrive: "",
      startTime: "",
      adults: "",
      children: "",
      cabinClass: "",
    });
    setListAddNewPlane(newArr);
  };

  const handleDeleteNewPlane = (index) => {
    let newArrListPlane = listAddNewPlane.filter((item, idx) => idx !== index);
    setListAddNewPlane(newArrListPlane);
  };

  const handleOnChangeNew = (type, event, index) => {
    let updateList = [...listAddNewPlane];
    updateList[index] = {
      ...updateList[index],
      [type]: event.target.value,
    };
    setListAddNewPlane(updateList);
    setErrorColor(false);
    setErrorArriveColor(false);
    setErrorTimeColor(false);
  };

  const handleSearchMultipleCities = () => {
    let isFromValid = listAddNewPlane.findIndex(
      (item) => item.from.trim() === ""
    );
    let isArriveValid = listAddNewPlane.findIndex(
      (item) => item.arrive.trim() === ""
    );
    let isTimeValid = listAddNewPlane.findIndex(
      (item) => item.startTime.trim() === ""
    );
    if (isFromValid !== -1) {
      setErrorColor(true);
    }
    if (isArriveValid !== -1) {
      setErrorArriveColor(true);
    }
    if (isTimeValid !== -1) {
      setErrorTimeColor(true);
    }
    if (isFromValid !== -1 && isArriveValid !== -1 && isTimeValid !== -1) {
      toast.error(
        languageEN
          ? `Please fill in the information in line number ${isFromValid + 1}`
          : `Vui lòng điền đầy đủ thông tin dòng số ${isFromValid + 1}`
      );
    }
  };

  const handleShowModal = (type) => {
    if (type === "ShowProvice") {
      if (listAddNewPlane.length === 0) {
        toast.error(
          languageEN
            ? "Please add a new one and select a location to buy tickets in advance!"
            : "Vui lòng thêm mới và chọn địa điểm để mua vé trước !"
        );
        return;
      }
      setShowModal(true);
    }
    if (type === "ShowRound") {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleIncrease = (type) => {
    if (type === "adults") {
      if (numberOfAdults <= 9) {
        setNumberOfAdults(numberOfAdults + 1);
      } else {
        toast.error(
          languageEN
            ? "Maximum can only register 10 people!"
            : "Tối đa chỉ có thể đăng ký 10 người !"
        );
      }
    }
    if (type === "children") {
      if (numberOfChildren <= 4) {
        setNumberOfChildren(numberOfChildren + 1);
      } else {
        toast.error(
          languageEN
            ? "Maximum can only register 5 children!"
            : "Tối đa chỉ có thể đăng ký 5 bé !"
        );
      }
    }
  };

  const handleReduce = (type) => {
    if (type === "adults" && numberOfAdults > 0) {
      setNumberOfAdults(numberOfAdults - 1);
    }
    if (type === "children" && numberOfChildren > 0) {
      setNumberOfChildren(numberOfChildren - 1);
    }
  };

  const handleConfirm = () => {
    let newListAddNew = [...listAddNewPlane];
    for (let i = 0; i < listAddNewPlane.length; i++) {
      newListAddNew[i] = {
        ...newListAddNew[i],
        adults: numberOfAdults,
        children: numberOfChildren,
        cabinClass: selectedOption,
      };
      setListAddNewPlane(newListAddNew);
    }
    toast.success(
      languageEN ? "Choose successfully!" : "Lựa chọn thành công !"
    );
    setShowModal(false);
  };

  // API GET PROVICE SERVICE
  const handleGetApiProvince = async () => {
    try {
      let res = await getApiProvinceService();
      if (res && res?.data) {
        setProvice(res.data);
      }
    } catch (error) {
      toast.error(languageEN ? "Fail" : "Thất bại !");
    }
  };

  const handleShowModalSelectPeople = () => {
    setIsShowModalSelectPeople(true);
  };

  const handleHideModalSelectPeople = () => {
    setIsShowModalSelectPeople(false);
  };

  const handleUpdateListTraveler = (listData) => {
    setListRoundTrip({
      ...listRoundTrip,
      adult: listData.adult,
      children: listData.children,
      cabin: listData.cabin,
    });
  };

  const handleSearchRoundWay = (type) => {
    if (type === "Khứ hồi") {
      let { addressStart, addressEnd, startTime, endTime, adult, children } =
        listRoundTrip;
      let currentDate = new Date();
      let selectedDateStart = new Date(startTime);
      let selectedDateEnd = new Date(endTime);
      if (!addressStart.trim()) {
        toast.error(
          languageEN
            ? "Please choose your starting point again!"
            : "Vui lòng chọn lại điểm bắt đầu !"
        );
        return;
      }
      if (!addressEnd.trim()) {
        toast.error(
          languageEN
            ? "Please select the ending point again!"
            : "Vui lòng chọn lại điểm kết thúc !"
        );
        return;
      }
      if (!startTime.trim()) {
        toast.error(
          languageEN
            ? "Please select a start time!"
            : "Vui lòng chọn thời gian bắt đầu !"
        );
        return;
      }
      // đang có vấn đề về so sánh ngày giống nhau
      if (selectedDateStart <= currentDate) {
        toast.error(
          languageEN
            ? "Departure date must be greater than current date!"
            : "Ngày khởi hành phải lớn hơn ngày hiện tại !"
        );
        return;
      }

      if (!endTime.trim()) {
        toast.error(
          languageEN
            ? "Please select an end time!"
            : "Vui lòng chọn thời gian kết thúc !"
        );
        return;
      }
      // đang có vấn đề về so sánh giống nhau
      if (selectedDateEnd < currentDate) {
        toast.error(
          languageEN
            ? "The end date must be greater than the current date!"
            : "Ngày kết thúc phải lớn hơn ngày hiện tại !"
        );
        return;
      }
      if (selectedDateEnd < selectedDateStart) {
        toast.error(
          languageEN
            ? "The ending date is smaller than the starting date!"
            : "Ngày kết thúc nhỏ hơn ngày bắt đầu !"
        );
        return;
      }
      if (addressStart === addressEnd) {
        toast.error(
          languageEN
            ? "The departure point must be different from the destination!"
            : "Điểm đi phải khác điểm đến !"
        );
        return;
      }
      if (adult === 0 || children === 0) {
        toast.error(
          languageEN
            ? "Please select all travelers and cabin class!"
            : "Vui lòng chọn đầy đủ Du khách và hạng khoang !"
        );
        return;
      }
      toast.success(
        languageEN
          ? "Choose a successful location!"
          : "Chọn địa điểm thành công !"
      );
      console.log(">>> check roundTrip", listRoundTrip);
      dispatch(RoundTrip(listRoundTrip));
      navigate("/home/list-of-flight");
    }
    if (type === "Một chiều") {
      let { addressStart, addressEnd, startTime } = listOneWay;
      let starTimeDate = new Date(startTime);
      let realTime = new Date();
      if (!addressStart.trim()) {
        toast.error(
          languageEN
            ? "Please select your starting location again!"
            : "Vui lòng chọn lại địa điểm xuất phát !"
        );
        return;
      }
      if (!addressEnd.trim()) {
        toast.error(
          languageEN
            ? "Please select the starting location again!"
            : "Vui lòng chọn lại địa điểm bắt đầu !"
        );
        return;
      }
      if (!startTime.trim()) {
        toast.error(
          languageEN
            ? "Please select a start time!"
            : "Vui lòng chọn thời gian bắt đầu !"
        );
        return;
      }
      if (starTimeDate < realTime) {
        toast.error(
          languageEN
            ? "Departure date must be greater than real time!"
            : "Ngày khởi hành phải lớn hơn thời gian thực !"
        );
        return;
      }
      if (numberOfAdults === 0 || numberOfChildren === 0) {
        toast.error(
          languageEN
            ? "Please select all travelers and cabin class!"
            : "Vui lòng chọn đầy đủ Du khách và hạng khoang !"
        );
        return;
      }
      if (addressStart === addressEnd) {
        toast.error(
          languageEN
            ? "The departure point must be different from the destination!"
            : "Điểm đi phải khác điểm đến !"
        );
        return;
      }

      setListOneWay({
        ...listOneWay,
        adult: numberOfAdults,
        children: numberOfChildren,
        cabin: selectedOption,
      });
      toast.success(
        languageEN
          ? "Choose a successful location!"
          : "Chọn địa điểm thành công !"
      );
      dispatch(OneWay(listOneWay));
    }
  };
  const handleOnChange = (type, event) => {
    if (checkRadio === "Khứ hồi") {
      setListRoundTrip({
        ...listRoundTrip,
        [type]: event.target.value,
      });
    }
    if (checkRadio === "Một chiều") {
      setListOneWay({
        ...listOneWay,
        [type]: event.target.value,
      });
    }
  };
  useEffect(() => {
    setCheckBox(false);
    handleGetApiProvince();
  }, [checkRadio]);

  useEffect(() => {
    if (listAddNewPlane.length === 0) {
      setNumberOfAdults(0);
      setNumberOfChildren(0);
      setSelectedOption("Phổ thông");
    }
  }, [listAddNewPlane]);

  // console.log(">>> check roundTrip", listRoundTrip);
  // console.log(">>> check oneWay", listOneWay);
  // console.log(">>> check ManyCities", listAddNewPlane);
  // const listStoreRoundTrip = useSelector((state) => state.listOfRoundTrip);
  // console.log(">>> check data Redux", listStoreRoundTrip);
  return (
    <div className="flight_container">
      <div className="flight_container--content">
        <div className="title--plane">
          <h1>
            {languageEN
              ? "Cheapest airfare to anywhere, from anywhere"
              : "Vé máy bay giá rẻ nhất đi muôn nơi, từ bất kỳ đâu"}
          </h1>
        </div>
        <div className="flight--selection">
          <div className="flight--btn">
            <label className="flight--btn--title">
              <input
                onClick={() => handleOptionFlightMethod("Khứ hồi")}
                type="radio"
                checked={checkRadio === "Khứ hồi" ? true : false}
                name="option"
              />
              {languageEN ? "Round trip" : " Khứ hồi"}
            </label>
            <label className="flight--btn--title">
              <input
                onClick={() => handleOptionFlightMethod("Một chiều")}
                checked={checkRadio === "Một chiều" ? true : false}
                type="radio"
                name="option"
              />

              {languageEN ? "One way" : "Một chiều"}
            </label>
            <label className="flight--btn--title">
              <input
                onClick={() => handleOptionFlightMethod("Nhiều thành phố")}
                checked={checkRadio === "Nhiều thành phố" ? true : false}
                type="radio"
                name="option"
              />

              {languageEN ? "Many cities" : "Nhiều thành phố"}
            </label>
          </div>

          {checkRadio === "Khứ hồi" || checkRadio === "Một chiều" ? (
            <div className="select--flight--type">
              <div className="flight--type--title">
                <div className="input_option">
                  <span>{languageEN ? "From" : "Từ"}</span>
                  <select
                    onChange={(event) => handleOnChange("addressStart", event)}
                  >
                    {provice &&
                      provice.length > 0 &&
                      provice.map((item, index) => {
                        return <option key={`key${index}`}>{item.name}</option>;
                      })}
                  </select>
                </div>
                <div className="input_option">
                  <span>{languageEN ? "Arrive" : "Đến"}</span>
                  <select
                    onChange={(event) => handleOnChange("addressEnd", event)}
                  >
                    {provice &&
                      provice.length > 0 &&
                      provice.map((item, index) => {
                        return (
                          <option value={item.name} key={`key${index}`}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="input_option">
                  <span>{languageEN ? "Start" : "Khởi hành"}</span>
                  <input
                    onChange={(event) => handleOnChange("startTime", event)}
                    type="date"
                    value={
                      checkRadio === "Khứ hồi"
                        ? listRoundTrip.startTime
                        : listOneWay.startTime
                    }
                  />
                </div>
                {checkRadio === "Khứ hồi" ? (
                  <div className="input_option">
                    <span>{languageEN ? "About" : "Về"}</span>
                    <input
                      onChange={(event) => handleOnChange("endTime", event)}
                      type="date"
                      value={listRoundTrip.endTime}
                    />
                  </div>
                ) : (
                  <div className="input_option cursor_not">
                    <span>{languageEN ? "About" : "Về"}</span>
                    <input disabled={checkRadio === "Một chiều"} type="date" />
                  </div>
                )}
                <div
                  onClick={() => handleShowModal("ShowRound")}
                  className="input_option"
                >
                  <span>
                    {languageEN
                      ? "Travelers and cabin class"
                      : "Du khách và hạng khoang"}
                  </span>
                  <div
                    className="input_render"
                    onClick={handleShowModalSelectPeople}
                  >
                    {languageEN
                      ? `${listRoundTrip.adult} adults, ${listRoundTrip.children} children, ${listRoundTrip.cabin} cabin`
                      : `${listRoundTrip.adult} nguời lớn, ${listRoundTrip.children} trẻ em, ${listRoundTrip.cabin} hạng khoang`}
                  </div>
                </div>
              </div>
              <div className="checkBox--container">
                <div className="checkBox-select">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => handleCheckBoxIsTrue("checkA")}
                      checked={checkBox.checkA}
                    />
                    {languageEN
                      ? "More recent airports"
                      : "Thêm các sân bay gần đây"}
                  </label>
                  <label className="option--end">
                    <input
                      type="checkbox"
                      onClick={() => handleCheckBoxIsTrue("checkB")}
                      checked={checkBox.checkB}
                    />
                    {languageEN
                      ? "More recent airports"
                      : "Thêm các sân bay gần đây nhất"}
                  </label>
                </div>
                <div className="checkBox--option">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => handleCheckBoxIsTrue("checkC")}
                      checked={checkBox.checkC}
                    />
                    {languageEN
                      ? "Direct flights only"
                      : "Chỉ các chuyến bay thẳng"}
                  </label>
                  <button onClick={() => handleSearchRoundWay(`${checkRadio}`)}>
                    {languageEN ? "Search for flights" : "Tìm kiếm chuyến bay"}{" "}
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="multiple--cities">
              {listAddNewPlane &&
                listAddNewPlane.length > 0 &&
                listAddNewPlane.map((item, index) => {
                  return (
                    <div key={index} className="multiple--cities--address">
                      <input
                        className={`input_form ${
                          errorColor && !item.from ? "input_form--color" : ""
                        }`}
                        value={item.from}
                        onChange={(event) =>
                          handleOnChangeNew("from", event, index)
                        }
                        type="text"
                        placeholder={
                          languageEN ? "From (eg: Ha Noi)" : "Từ (VD: Hà Nội)"
                        }
                      />

                      <AiFillCaretRight className="icon--plane" />
                      <input
                        className={`input_form ${
                          errorArriveColor && !item.arrive
                            ? "input_form--color"
                            : ""
                        }`}
                        onChange={(event) =>
                          handleOnChangeNew("arrive", event, index)
                        }
                        type="text"
                        placeholder={
                          languageEN
                            ? "Arrive (eg: Da Nang)"
                            : "Đến (VD: Đà Nẵng)"
                        }
                        value={item.arrive}
                      />
                      <input
                        className={`input_form ${
                          errorTimeColor && !item.startTime
                            ? "input_form--color"
                            : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleOptionStartTime(`date start${index}`)
                        }
                        onChange={(event) =>
                          handleOnChangeNew("startTime", event, index)
                        }
                        value={item.startTime}
                        type={start === `date start${index}` ? "date" : "text"}
                        placeholder={languageEN ? "Start" : "Khởi hành"}
                      />
                      <AiOutlineClose
                        onClick={() => handleDeleteNewPlane(index)}
                        className="icon--plane"
                        style={{ cursor: "pointer" }}
                      />
                      {errorColor && !item.from && (
                        <BiErrorAlt className="icon--err--st" />
                      )}
                      {errorArriveColor && !item.arrive && (
                        <BiErrorAlt className="icon--err--ct" />
                      )}
                      {errorTimeColor && !item.startTime && (
                        <BiErrorAlt className="icon--err--ed" />
                      )}
                    </div>
                  );
                })}
              {listAddNewPlane.length >= 5 ? (
                ""
              ) : (
                <div className="multiple--cities--add">
                  <span onClick={handleAddNewFlight}>
                    <BiPlus />
                    {languageEN
                      ? "Add more flights (maximum 5 flights)"
                      : "Thêm chuyến bay khác (tối đa 5 chuyến)"}
                  </span>
                </div>
              )}
              <div className="multiple--cities--age">
                <div
                  onClick={() => handleShowModal("ShowProvice")}
                  className="option--age"
                >
                  {languageEN
                    ? `${numberOfAdults} adults, ${numberOfChildren} children, ${selectedOption}`
                    : `${numberOfAdults} nguời lớn, ${numberOfChildren} trẻ em, ${selectedOption}`}
                  <AiOutlineCaretDown />
                </div>
                {showModal && (
                  <div className="option--modal">
                    <div>
                      <div className="cabin--class">
                        <p>{languageEN ? "Cabin class" : "Hạng Khoang"}</p>
                        <select
                          value={selectedOption}
                          onChange={(event) => {
                            setSelectedOption(event.target.value);
                          }}
                        >
                          <option value={languageEN ? "Common" : "Phổ thông"}>
                            {languageEN ? "Common" : "Phổ thông"}
                          </option>
                          <option
                            value={
                              languageEN
                                ? "Special universal"
                                : "Phổ thông đặc biệt"
                            }
                          >
                            {languageEN
                              ? "Special universal"
                              : "Phổ thông đặc biệt"}
                          </option>
                          <option value={languageEN ? "Trader" : "Thương gia"}>
                            {languageEN ? "Trader" : "Thương gia"}
                          </option>
                          <option
                            value={languageEN ? "First class" : "Hạng nhất"}
                          >
                            {languageEN ? "First class" : "Hạng nhất"}
                          </option>
                        </select>
                      </div>
                      <div className="adults">
                        <p>{languageEN ? "Many adults" : "Nhiều người lớn"}</p>
                        <div>
                          <span onClick={() => handleReduce("adults")}>-</span>
                          <span className="quantity">{numberOfAdults}</span>
                          <span onClick={() => handleIncrease("adults")}>
                            +
                          </span>
                          <span className="age">
                            {languageEN ? "16+ years old" : "16+ tuổi"}
                          </span>
                        </div>
                      </div>
                      <div className="children">
                        <p>{languageEN ? "Many children" : "Nhiều trẻ em"}</p>
                        <div>
                          <span onClick={() => handleReduce("children")}>
                            -
                          </span>
                          <span className="quantity">{numberOfChildren}</span>
                          <span onClick={() => handleIncrease("children")}>
                            +
                          </span>
                          <span className="age">
                            {languageEN ? "0-15 years old" : "0-15 tuổi"}
                          </span>
                        </div>
                      </div>
                      <div className="text-instruct">
                        <p>
                          {languageEN
                            ? "Your age when traveling must be valid for the group age when booking ticket. Airlines have limits on people under 18 years old traveling alone."
                            : "Tuổi của bạn khi đi du lịch phải hợp lệ đối với nhóm tuổi đã đặt vé. Các hãng hàng không có giới hạn về những người dưới 18 tuổi đi du lịch một mình."}
                        </p>
                        <p>
                          {languageEN
                            ? "Age restrictions and policies regarding travel with Children may vary, so please check with airline before booking tickets."
                            : "Các giới hạn và chính sách về độ tuổi về du lịch với trẻ có thể khác nhau, vì vậy vui lòng kiểm tra với hãng hàng không trước khi đặt vé."}
                        </p>
                      </div>
                      <div class="triangle"></div>
                      <div class="confirm">
                        <p onClick={handleConfirm}>
                          {languageEN ? "Finished" : "Xong"}
                        </p>
                        <p onClick={handleClose}>
                          {languageEN ? "Cancel" : "Hủy"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div onClick={handleSearchMultipleCities} className="search">
                  {languageEN ? "Search for flights" : "Tìm kiếm chuyến bay"}
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ModalSelectPeople
        show={isShowModalSelectPeople}
        handle={handleHideModalSelectPeople}
        handleUpdate={handleUpdateListTraveler}
        numberOfAdults={numberOfAdults}
        numberOfChildren={numberOfChildren}
        selectedOption={selectedOption}
      />
    </div>
  );
};

export default Flight;
