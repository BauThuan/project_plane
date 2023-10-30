import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { AiFillCreditCard, AiFillTag } from "react-icons/ai";
import "../../styles/Introduce.scss";
import "../../styles/root.scss";

const Introduce = () => {
  return (
    <div className="introduce_container">
      <div className="introduce_content">
        <div className="introduce-plane">
          <IoIosAirplane className="icon" />
          <p>
            Khám phá vé máy bay giá rẻ nhất đến và đi từ bất kỳ đâu và đặt vé
            máy bay mà không lo mất phí
          </p>
        </div>
        <div className="introduce-plane">
          <AiFillCreditCard className="icon" />
          <p>
            So sánh khuyến mại vé máy bay từ hơn 1.000 nhà cung cấp để chọn cho
            mình vé máy bay giá rẻ nhất, nhanh nhất hoặc giá mới nhất.
          </p>
        </div>
        <div className="introduce-plane">
          <AiFillTag className="icon" />
          <p>
            Tìm tháng hoặc thậm chí ngày có giá vé máy bay rẻ nhất để bay. Bạn
            cũng có thể thiết lập Thông báo giá để đặt vé máy bay khi có mức giá
            phù hợp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
