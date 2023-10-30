import React from "react";
import "../styles/root.scss";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_start">
          <div>
            <p>Trung tâm chợ giúp</p>
            <p>Hướng dẫn mua vé</p>
            <p>Chương trình liên kết</p>
            <p>Liên hệ với truyền thông</p>
          </div>
          <div>
            <p>Trợ giúp</p>
            <p>Cài đặt về quyền riêng tư</p>
            <p>Đăng nhập</p>
            <p>Đăng ký</p>
          </div>
          <div>
            <p>Chính sách cookie</p>
            <p>Chính sách về quyền riêng tư</p>
            <p>Điều kiện dịch vụ</p>
            <p>Các chi tiết về công ty</p>
          </div>
          <div>
            <p>Khám phá</p>
            <p>Công ty</p>
            <p>Đối tác</p>
            <p>Hành trình</p>
          </div>
        </div>
        <div className="footer_end">© Skyscanner Ltd 2002 – 2023</div>
      </div>
    </div>
  );
};

export default Footer;
