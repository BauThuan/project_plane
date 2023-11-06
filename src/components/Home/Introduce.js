import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { AiFillCreditCard, AiFillTag } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../styles/Introduce.scss";
import "../../styles/root.scss";

const Introduce = () => {
  const languageEN = useSelector((state) => state.languageEN);
  return (
    <div className="introduce_container">
      <div className="introduce_content">
        <div className="introduce-plane">
          <IoIosAirplane className="icon" />
          <p>
            {languageEN
              ? "Discover the cheapest flight tickets to and from anywhere and book your tickets plane without worrying about fees"
              : " Khám phá vé máy bay giá rẻ nhất đến và đi từ bất kỳ đâu và đặt vé máy bay mà không lo mất phí"}
          </p>
        </div>
        <div className="introduce-plane">
          <AiFillCreditCard className="icon" />
          <p>
            {languageEN
              ? "Compare airline ticket deals from over 1,000 providers to choose from I have the cheapest, fastest or newest flight ticket."
              : " So sánh khuyến mại vé máy bay từ hơn 1.000 nhà cung cấp để chọn cho mình vé máy bay giá rẻ nhất, nhanh nhất hoặc giá mới nhất."}
          </p>
        </div>
        <div className="introduce-plane">
          <AiFillTag className="icon" />
          <p>
            {languageEN
              ? "Find the month or even day with the cheapest airfare to fly. Friend You can also set up Price Alerts to book flight tickets when prices become available Fit"
              : " Tìm tháng hoặc thậm chí ngày có giá vé máy bay rẻ nhất để bay. Bạn cũng có thể thiết lập Thông báo giá để đặt vé máy bay khi có mức giá phù hợp"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
