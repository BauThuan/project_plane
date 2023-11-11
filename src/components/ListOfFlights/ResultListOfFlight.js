import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CgAirplane } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../styles/root.scss";
import "../../styles/ResultListOfFlight.scss";
const ResultListOfFlight = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const listStoreRoundTrip = useSelector((state) => state.listOfRoundTrip);
  const listStoreOneWay = useSelector((state) => state.listOfOneWay);
  const title = useSelector((state) => state.newTitle);
  const navigate = useNavigate();
  const [listFlightPlane, setListFlightPlane] = useState([]);

  const handleNavigateFlightDetials = () => {
    navigate("/home/flight-details");
  };
  useEffect(() => {
    if (title === "Khứ hồi") {
      setListFlightPlane([...listFlightPlane, listStoreRoundTrip]);
      return;
    }
    setListFlightPlane([...listFlightPlane, listStoreOneWay]);
  }, [title]);

  // console.log(">>> check tiitle", title);
  // console.log(">>> check titile", title);
  // console.log(">>> check setListfligjtPlane", listFlightPlane);
  // console.log(">>> check rondTrip", listStoreRoundTrip);
  // console.log(">>> check OneWay", listStoreOneWay);
  return (
    <div className="result_container">
      <div className="result_content">
        {listFlightPlane.length > 0 &&
          listFlightPlane &&
          listFlightPlane.map((item, index) => {
            return (
              <div className="menu" key={`index ${index}`}>
                <div className="search">
                  <BiSearch />
                </div>
                <div className="list_data">
                  <div className="name_city">
                    <p>
                      {item.addressStart} - {item.addressEnd}
                    </p>
                  </div>
                  <div className="traveler_cabin">
                    <p>
                      {languageEN
                        ? ` ${item.adult} adults | ${item.children} children |
                      ${item.cabin}`
                        : ` ${item.adult} người lớn | ${item.children} trẻ em |
                      ${item.cabin}`}
                    </p>
                  </div>
                </div>
                <div className="date">
                  <AiFillCaretLeft className="icon_size" />
                  {item.startTime}
                  <AiFillCaretRight className="icon_size" />
                </div>
              </div>
            );
          })}
        <div className="result">
          {listFlightPlane.length > 0 &&
            listFlightPlane &&
            listFlightPlane.map((item, index) => {
              return (
                <div className="details_result">
                  <div className="details_result--left">
                    <div className="image-logo-form">
                      <img
                        className="image-logo"
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VNA-Sky-Te-V.png"
                      />
                    </div>
                    <div className="time_plane">
                      <div className="address_start">
                        <p>{item.startTime}</p>
                        <p>{item.addressStart}</p>
                      </div>
                      <div className="line">
                        <p className="total_time">2h</p>
                        <div>
                          <p className="line_address"></p>
                          <p className="icon_plane">
                            <CgAirplane className="icon_plane_child" />
                          </p>
                        </div>
                        <p className="status">Trực tiếp</p>
                      </div>
                      <div className="address_end">
                        <p>{item.endTime}</p>
                        <p>{item.addressEnd}</p>
                      </div>
                    </div>
                  </div>
                  <div className="details_result--right">
                    <p>
                      1.000.000
                      <u>đ</u>
                    </p>
                    <p
                      className="confirm"
                      onClick={handleNavigateFlightDetials}
                    >
                      {languageEN ? "Select" : "Chọn"} <AiOutlineArrowRight />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ResultListOfFlight;
