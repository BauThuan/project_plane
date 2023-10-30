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
import ModalSelectPeople from "../Modal/ModalSelectPeople";
import "../../styles/root.scss";
import "../../styles/Flight.scss";

const Flight = () => {
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
      toast.error(`Vui lòng điền đầy đủ thông tin dòng số ${isFromValid + 1}`);
    }
  };

  const handleShowModal = (type) => {
    if (type === "ShowProvice") {
      if (listAddNewPlane.length === 0) {
        toast.error("Vui lòng thêm mới và chọn địa điểm để mua vé trước !");
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
    setNumberOfAdults(0);
    setNumberOfChildren(0);
  };

  const handleIncrease = (type) => {
    if (type === "adults") {
      if (numberOfAdults <= 9) {
        setNumberOfAdults(numberOfAdults + 1);
      } else {
        toast.error("Tối đa chỉ có thể đăng ký 10 người !");
      }
    }
    if (type === "children") {
      if (numberOfChildren <= 4) {
        setNumberOfChildren(numberOfChildren + 1);
      } else {
        toast.error("Tối đa chỉ có thể đăng ký 5 bé !");
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
    toast.success("Lựa chọn thành công !");
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
      toast.error("Thất bại !");
    }
  };

  const handleShowModalSelectPeople = () => {
    setIsShowModalSelectPeople(true);
  };

  const handleHideModalSelectPeople = () => {
    setIsShowModalSelectPeople(false);
  };

  const handleUpdateListTraveler = (listData) => {
    setNumberOfAdults(listData.adult);
    setNumberOfChildren(listData.children);
    setSelectedOption(listData.cabin);
  };

  const handleSearchRoundWay = (type) => {
    if (type === "Khứ hồi") {
      let {
        addressStart,
        addressEnd,
        startTime,
        endTime,
        adult,
        children,
        cabin,
      } = listRoundTrip;
      if (!addressStart.trim()) {
        toast.error("Vui lòng chọn lại điểm bắt đầu !");
        return;
      }
      if (!addressEnd.trim()) {
        toast.error("Vui lòng chọn lại điểm kết thúc !");
        return;
      }
      if (!startTime.trim()) {
        toast.error("Vui lòng chọn thời gian bắt đầu !");
        return;
      }
      if (!endTime.trim()) {
        toast.error("Vui lòng chọn thời gian kết thúc !");
      }
      if (addressStart === addressEnd) {
        toast.error("Điểm đi phải khác điểm đến !");
        return;
      }
      if (numberOfAdults === 0 || numberOfChildren === 0) {
        toast.error("Vui lòng chọn đầy đủ Du khách và hạng khoang !");
        return;
      }
      setListRoundTrip({
        ...listRoundTrip,
        adult: numberOfAdults,
        children: numberOfChildren,
        cabin: selectedOption,
      });
      toast.success("Chọn địa điểm thành công !");
    }
    if (type === "Một chiều") {
      let { addressStart, addressEnd, startTime, adult, children, cabin } =
        listOneWay;
      if (!addressStart.trim()) {
        toast.error("Vui lòng chọn lại địa điểm xuất phát !");
        return;
      }
      if (!addressEnd.trim()) {
        toast.error("Vui lòng chọn lại địa điểm bắt đầu !");
        return;
      }
      if (!startTime.trim()) {
        toast.error("Vui lòng chọn thời gian bắt đầu !");
        return;
      }
      if (numberOfAdults === 0 || numberOfChildren === 0) {
        toast.error("Vui lòng chọn đầy đủ Du khách và hạng khoang !");
        return;
      }
      if (addressStart === addressEnd) {
        toast.error("Điểm đi phải khác điểm đến !");
        return;
      }

      setListOneWay({
        ...listOneWay,
        adult: numberOfAdults,
        children: numberOfChildren,
        cabin: selectedOption,
      });
      toast.success("Chọn địa điểm thành công !");
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

  console.log(">>> check data 1 chieu", listOneWay);
  return (
    <div className="flight_container">
      <div className="flight_container--content">
        <div className="title--plane">
          <h1>Vé máy bay giá rẻ nhất đi muôn nơi, từ bất kỳ đâu</h1>
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
              Khứ hồi
            </label>
            <label className="flight--btn--title">
              <input
                onClick={() => handleOptionFlightMethod("Một chiều")}
                checked={checkRadio === "Một chiều" ? true : false}
                type="radio"
                name="option"
              />
              Một chiều
            </label>
            <label className="flight--btn--title">
              <input
                onClick={() => handleOptionFlightMethod("Nhiều thành phố")}
                checked={checkRadio === "Nhiều thành phố" ? true : false}
                type="radio"
                name="option"
              />
              Nhiều thành phố
            </label>
          </div>

          {checkRadio === "Khứ hồi" || checkRadio === "Một chiều" ? (
            <div className="select--flight--type">
              <div className="flight--type--title">
                <div className="input_option">
                  <span>Từ</span>
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
                  <span>Đến</span>
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
                  <span>Khởi hành</span>
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
                    <span>Về</span>
                    <input
                      onChange={(event) => handleOnChange("endTime", event)}
                      type="date"
                      value={listRoundTrip.endTime}
                    />
                  </div>
                ) : (
                  <div className="input_option cursor_not">
                    <span>Về</span>
                    <input disabled={checkRadio === "Một chiều"} type="date" />
                  </div>
                )}
                <div
                  onClick={() => handleShowModal("ShowRound")}
                  className="input_option"
                >
                  <span>Du khách và hạng khoang</span>
                  <div
                    className="input_render"
                    onClick={handleShowModalSelectPeople}
                  >
                    {`${numberOfAdults} nguời lớn, ${numberOfChildren} trẻ em, ${selectedOption}`}
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
                    Thêm các sân bay gần đây
                  </label>
                  <label className="option--end">
                    <input
                      type="checkbox"
                      onClick={() => handleCheckBoxIsTrue("checkB")}
                      checked={checkBox.checkB}
                    />
                    Thêm các sân bay gần đây nhất
                  </label>
                </div>
                <div className="checkBox--option">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => handleCheckBoxIsTrue("checkC")}
                      checked={checkBox.checkC}
                    />
                    Chỉ các chuyến bay thẳng
                  </label>
                  <button onClick={() => handleSearchRoundWay(`${checkRadio}`)}>
                    Tìm kiếm chuyến bay <AiOutlineArrowRight />
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
                        placeholder="Từ (VD: Hà Nội)"
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
                        placeholder="Đến (VD: Đà Nẵng)"
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
                        placeholder="Khởi hành"
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
                    Thêm chuyến bay khác (tối đa 5 chuyến)
                  </span>
                </div>
              )}
              <div className="multiple--cities--age">
                <div
                  onClick={() => handleShowModal("ShowProvice")}
                  className="option--age"
                >
                  {`${numberOfAdults} nguời lớn, ${numberOfChildren} trẻ em, ${selectedOption}`}
                  <AiOutlineCaretDown />
                </div>
                {showModal && (
                  <div className="option--modal">
                    <div>
                      <div className="cabin--class">
                        <p>Hạng Khoang</p>
                        <select
                          value={selectedOption}
                          onChange={(event) => {
                            setSelectedOption(event.target.value);
                          }}
                        >
                          <option value="Phổ thông">Phổ thông</option>
                          <option value="Phổ thông đặc biệt">
                            Phổ thông đặc biệt
                          </option>
                          <option value="Thương gia">Thương gia</option>
                          <option value="Hạng nhất">Hạng nhất</option>
                        </select>
                      </div>
                      <div className="adults">
                        <p>Nhiều người lớn</p>
                        <div>
                          <span onClick={() => handleReduce("adults")}>-</span>
                          <span className="quantity">{numberOfAdults}</span>
                          <span onClick={() => handleIncrease("adults")}>
                            +
                          </span>
                          <span className="age">16+ tuổi</span>
                        </div>
                      </div>
                      <div className="children">
                        <p>Nhiều trẻ em</p>
                        <div>
                          <span onClick={() => handleReduce("children")}>
                            -
                          </span>
                          <span className="quantity">{numberOfChildren}</span>
                          <span onClick={() => handleIncrease("children")}>
                            +
                          </span>
                          <span className="age">0-15 tuổi</span>
                        </div>
                      </div>
                      <div className="text-instruct">
                        <p>
                          Tuổi của bạn khi đi du lịch phải hợp lệ đối với nhóm
                          tuổi đã đặt vé. Các hãng hàng không có giới hạn về
                          những người dưới 18 tuổi đi du lịch một mình.
                        </p>
                        <p>
                          Các giới hạn và chính sách về độ tuổi về du lịch với
                          trẻ có thể khác nhau, vì vậy vui lòng kiểm tra với
                          hãng hàng không trước khi đặt vé.
                        </p>
                      </div>
                      <div class="triangle"></div>
                      <div class="confirm">
                        <p onClick={handleConfirm}>Xong</p>
                        <p onClick={handleClose}>Hủy</p>
                      </div>
                    </div>
                  </div>
                )}
                <div onClick={handleSearchMultipleCities} className="search">
                  Tìm kiếm chuyến bay <AiOutlineArrowRight />
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
