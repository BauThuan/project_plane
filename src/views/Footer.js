import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "../styles/root.scss";
import "../styles/Footer.scss";

const Footer = () => {
  const languageEN = useSelector((state) => state.languageEN);
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_start">
          <div>
            <p>{languageEN ? "Market center helps" : "Trung tâm chợ giúp"}</p>
            <p>
              {languageEN
                ? "Instructions for buying tickets"
                : "Hướng dẫn mua vé"}
            </p>
            <p>{languageEN ? "Linked program" : "Chương trình liên kết"}</p>
            <p>
              {languageEN ? "Contact the media" : "Liên hệ với truyền thông"}
            </p>
          </div>
          <div>
            <p>{languageEN ? "Help" : "Trợ giúp"}</p>
            <p>
              {languageEN ? "Privacy settings" : "Cài đặt về quyền riêng tư"}
            </p>
            <p>{languageEN ? "Log in" : "Đăng nhập"}</p>
            <p>{languageEN ? "Register" : "Đăng ký"}</p>
          </div>
          <div>
            <p>{languageEN ? "Cookie policy" : "Chính sách cookie"}</p>
            <p>
              {languageEN ? "Privacy policy" : "Chính sách về quyền riêng tư"}
            </p>
            <p>{languageEN ? "Service conditions" : "Điều kiện dịch vụ"}</p>
            <p>{languageEN ? "Company details" : "Các chi tiết về công ty"}</p>
          </div>
          <div>
            <p>{languageEN ? "Discover" : "Khám phá"}</p>
            <p>{languageEN ? "Company" : "Công ty"}</p>
            <p>{languageEN ? "Partner" : "Đối tác"}</p>
            <p>{languageEN ? "Trip" : "Hành trình"}</p>
          </div>
        </div>
        <div className="footer_end">© Skyscanner Ltd 2002 – 2023</div>
      </div>
    </div>
  );
};

export default Footer;
