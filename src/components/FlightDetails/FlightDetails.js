import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { CgAirplane } from "react-icons/cg";
import { PiWarningCircleFill } from "react-icons/pi";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "../../styles/root.scss";
import "../../styles/FlightDetails.scss";
const FlightDetails = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const navigate = useNavigate();
  const handleOrderTicketSuccess = () => {
    toast.success(languageEN ? "Nearly done!" : "Gần xong rồi !");
    navigate("/home/ticket-booking");
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN
            ? "Flight Details | Skyscanner"
            : "Chi tiết vé máy bay | Skyscanner"}
        </title>
      </Helmet>
      <div className="details_container">
        <div className="details_container-start">
          <p className="name_city">Thành phố Hồ Chí Minh - Thành phố Hà Nội</p>
          <p>
            <BiSolidUser /> 1 người lớn, <BiSolidUser /> 2 trẻ em
          </p>
          <p>Một chiều . Phổ thông</p>
        </div>
        <div className="details_container-end">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="details_result">
                  <div className="details_result--left">
                    <div className="image-logo-form">
                      <img
                        className="image-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VietJet_Air_logo.svg/2560px-VietJet_Air_logo.svg.png"
                      />
                    </div>
                    <div className="time_plane">
                      <div className="address_start">
                        <p>17:00</p>
                        <p>Hà Nội</p>
                      </div>
                      <div className="line">
                        <p className="total_time">2h</p>
                        <div>
                          <p className="line_address"></p>
                          <p className="icon_plane">
                            <CgAirplane className="icon_plane_child" />
                          </p>
                        </div>
                        <p className="status">
                          {languageEN ? "Direct" : "Trực tiếp"}
                        </p>
                      </div>
                      <div className="address_end">
                        <p>19:00</p>
                        <p>Thành phố Hồ Chí Minh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Container className="z-n1 mt-5 table_container">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>{languageEN ? "Airline" : "Hãng bay"}</th>
                        <th>{languageEN ? "Flight" : "Chuyến bay"}</th>
                        <th>{languageEN ? "Cabin class" : "Hạng khoang"}</th>
                        <th>
                          {languageEN ? "Start time" : "Thời gian bắt đầu"}
                        </th>
                        <th>
                          {languageEN ? "End time" : "Thời gian kết thúc"}
                        </th>
                        <th>{languageEN ? "Start day" : "Ngày bắt đầu"}</th>
                        <th>{languageEN ? "Flight time" : "Thời gian bay"}</th>
                        <th>{languageEN ? "Expense" : "Chi phí"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vietjet</td>
                        <td>Khứ hồi</td>
                        <td>Phổ thông</td>
                        <td>17:00</td>
                        <td>19:00</td>
                        <td>23/11/2023</td>
                        <td>2h</td>
                        <td>980.000đ</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="details_container-center">
          <p>{languageEN ? "Book your tickets" : "Đặt vé của bạn"}</p>
          <p>Phổ thông, 1 người lớn, 2 trẻ em</p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <PiWarningCircleFill style={{ color: "red" }} />
                {languageEN
                  ? "Read carefully before booking tickets"
                  : "Đọc kĩ trước khi đặt vé"}
              </Accordion.Header>
              <Accordion.Body>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  className="text_error"
                >
                  {languageEN
                    ? "Prices displayed always include an estimate of all taxes and fees Postage required, but remember"
                    : "Giá hiển thị luôn bao gồm khoản ước tính của toàn bộ thuế và cước phí bắt buộc, nhưng nhớ"}{" "}
                  <strong
                    style={{
                      color: "#545860",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {languageEN
                      ? "Check ALL ticket details, final price and terms and condition"
                      : "kiểm tra TẤT CẢ chi tiết vé, giá cuối cùng và các điều khoản và điều kiện"}
                  </strong>{" "}
                  {languageEN
                    ? "on the booking website before you book your tickets."
                    : "trên trang web đặt vé trước khi bạn đặt vé."}
                </p>
                <ul>
                  <li
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <strong
                      style={{
                        color: "#545860",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {languageEN
                        ? "Check for additional fees"
                        : "Kiểm tra phụ phí"}
                    </strong>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {languageEN
                        ? "Some airlines/agents charge additional fees"
                        : "Một số hãng hàng không / đại lý tính thêm phí"}{" "}
                      <strong>
                        {languageEN
                          ? "luggage, insurance"
                          : "hành lý, bảo hiểm "}
                      </strong>{" "}
                      {languageEN
                        ? "or use a credit card and include the service fee. See fees of the airline"
                        : "hoặc sử dụng thẻ tín dụng và bao gồm phí dịch vụ. Xem phí của hãng hàng không"}
                    </p>
                  </li>
                  <li
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <strong
                      style={{
                        color: "#545860",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {languageEN
                        ? "Check the terms & conditions for passengers between the ages of 12-16"
                        : "Kiểm tra các điều khoản & điều kiện cho các hành khách trong độ tuổi từ 12-16"}{" "}
                    </strong>
                    {languageEN
                      ? "Restrictions may apply to younger passengers traveling alone me."
                      : "Các giới hạn có thể áp dụng với hành khách nhỏ tuổi đi một mình."}
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="confirm">
          <button onClick={handleOrderTicketSuccess}>
            {languageEN ? "Ticket booking" : "Đặt vé máy bay"}
          </button>
        </div>
      </div>
    </>
  );
};
export default FlightDetails;
