import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "../../styles/root.scss";
import "../../styles/TicketBook.scss";

const TicketBook = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const navigate = useNavigate();
  const [hideButton, setHideButton] = useState(false);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setHideButton(true);
    }, 10000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const handleSuccesfull = () => {
    toast.success(languageEN ? "Sign Up Success !" : "Đăng ký thành công !");
    setHideButton(false);
    navigate("/home/page");
  };
  return (
    <div className="ticket_container">
      <div className="ticket_content">
        <h1>
          {languageEN
            ? "Thank you, almost done..."
            : "Cảm ơn bạn, gần xong rồi..."}
        </h1>
        <div className="details_ticket">
          <div className="left">
            <img src="https://1000logos.net/wp-content/uploads/2023/01/Skyscanner-logo.png" />
            <p>
              {languageEN
                ? "You've found your ticket"
                : "Bạn đã tìm thấy vé của mình"}
            </p>
          </div>
          <div className="center">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>
              {languageEN
                ? "We're taking you to Vietnam Airlines"
                : "Chúng tôi đang đưa bạn tới Vietnam Airlines"}
            </p>
          </div>
          <div className="right">
            <img src="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg" />
            <p>
              {languageEN
                ? "Your booking with Vietnam Airlines has now been completed"
                : "Hiện tại đã hoàn thành việc đặt vé của bạn với Vietnam Airlines"}
            </p>
          </div>
        </div>
        {hideButton && (
          <div className="btn">
            <button onClick={handleSuccesfull}>
              {languageEN ? "Complete" : "Hoàn thành"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketBook;
