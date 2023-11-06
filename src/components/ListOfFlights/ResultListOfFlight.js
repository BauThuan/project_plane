import React from "react";
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
  const navigate = useNavigate();
  const datafake = [
    {
      image:
        "https://inkythuatso.com/uploads/images/2021/09/logo-bamboo-airways-inkythuatso-13-16-26-24.jpg",
      addressStart: "Hà Nội",
      addressEnd: "Đà Nẵng",
      timeStart: "17:00",
      timeEnd: "21:00",
      totalTime: "4h",
      status: "Trực tiếp",
      price: "999.000",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VietJet_Air_logo.svg/2560px-VietJet_Air_logo.svg.png",
      addressStart: "TP. Hồ Chí Minh",
      addressEnd: "Hà Nội",
      timeStart: "10:00",
      timeEnd: "15:00",
      totalTime: "5h",
      status: "Trực tiếp",
      price: "1.000.000",
    },
    {
      image:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png",
      addressStart: "Đà Nẵng",
      addressEnd: "TP. Hồ Chí Minh",
      timeStart: "5:00",
      timeEnd: "7:00",
      totalTime: "2h",
      status: "Trực tiếp",
      price: "780.000",
    },
    {
      image:
        "https://inkythuatso.com/uploads/images/2021/09/logo-bamboo-airways-inkythuatso-13-16-26-24.jpg",
      addressStart: "Hà Nội",
      addressEnd: "Đà Nẵng",
      timeStart: "17:00",
      timeEnd: "21:00",
      totalTime: "4h",
      status: "Trực tiếp",
      price: "999.000",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VietJet_Air_logo.svg/2560px-VietJet_Air_logo.svg.png",
      addressStart: "TP. Hồ Chí Minh",
      addressEnd: "Hà Nội",
      timeStart: "10:00",
      timeEnd: "15:00",
      totalTime: "5h",
      status: "Trực tiếp",
      price: "1.000.000",
    },
    {
      image:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png",
      addressStart: "Đà Nẵng",
      addressEnd: "TP. Hồ Chí Minh",
      timeStart: "5:00",
      timeEnd: "7:00",
      totalTime: "2h",
      status: "Trực tiếp",
      price: "780.000",
    },
  ];
  const handleNavigateFlightDetials = () => {
    navigate("/home/flight-details");
  };
  return (
    <div className="result_container">
      <div className="result_content">
        <div className="menu">
          <div className="search">
            <BiSearch />
          </div>
          <div className="list_data">
            <div className="name_city">
              <p>Thành phố Hồ Chí Minh - Phú Quốc</p>
            </div>
            <div className="traveler_cabin">
              <p>3 khách du lịch | Phổ thông</p>
            </div>
          </div>
          <div className="date">
            <AiFillCaretLeft className="icon_size" />
            2023-12-03
            <AiFillCaretRight className="icon_size" />
          </div>
        </div>
        <div className="result">
          {datafake.length > 0 &&
            datafake &&
            datafake.map((item, index) => {
              return (
                <div className="details_result">
                  <div className="details_result--left">
                    <div className="image-logo-form">
                      <img className="image-logo" src={item.image} />
                    </div>
                    <div className="time_plane">
                      <div className="address_start">
                        <p>{item.timeStart}</p>
                        <p>{item.addressStart}</p>
                      </div>
                      <div className="line">
                        <p className="total_time">{item.totalTime}</p>
                        <div>
                          <p className="line_address"></p>
                          <p className="icon_plane">
                            <CgAirplane className="icon_plane_child" />
                          </p>
                        </div>
                        <p className="status">{item.status}</p>
                      </div>
                      <div className="address_end">
                        <p>{item.timeEnd}</p>
                        <p>{item.addressEnd}</p>
                      </div>
                    </div>
                  </div>
                  <div className="details_result--right">
                    <p>
                      {item.price}
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
