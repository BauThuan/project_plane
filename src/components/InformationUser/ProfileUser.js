import React, { useState } from "react";
import { FaCircleUser, FaChevronRight } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { LogOut } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import ModalEditProfile from "../Modal/ModalEditProfile";
import ModalDeleteAccount from "../Modal/ModalDeleteAccount";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import "../../styles/root.scss";
import "../../styles/ProfileUser.scss";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.listLogin);
  const languageEN = useSelector((state) => state.languageEN);
  const [isShowModalEditProfile, setIsShowModalEditProfile] = useState(false);
  const [isShowModalDeleteAccount, setIsShowModalDeleteAccount] =
    useState(false);
  const [showOption, setShowOption] = useState("Tài khoản");
  const handleLogOut = () => {
    toast.success(
      languageEN ? "Successfully logged out!" : "Đăng xuất thành công !"
    );
    dispatch(LogOut());
    navigate("/home/page");
  };

  const handleHideModalEditProfile = () => {
    setIsShowModalEditProfile(false);
  };

  const handleShowModalEditProfile = () => {
    setIsShowModalEditProfile(true);
  };

  const handleShowOptionSelect = (type) => {
    if (type === "Tài khoản" || type === "Thông báo" || type === "Lịch sử") {
      setShowOption(type);
    }
  };

  const handleHideModalDeleteAccount = () => {
    setIsShowModalDeleteAccount(false);
  };

  const handleShowModalDeleteAccount = () => {
    setIsShowModalDeleteAccount(true);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN ? "Profile | Skyscanner" : "Hồ sơ | Skyscanner"}
        </title>
      </Helmet>
      <div className="profile_container">
        <div className="profile_content">
          <div className="profile_content--left">
            <div
              onClick={() => handleShowOptionSelect("Tài khoản")}
              className="profile_account"
            >
              <div className="icon_text">
                <FaCircleUser className="margin_icon" />
                {languageEN ? "Account" : "Tài khoản"}
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => handleShowOptionSelect("Lịch sử")}
              className="profile_account"
            >
              <div className="icon_text">
                <FaHistory className="margin_icon" />
                {languageEN ? "History" : "Lịch sử"}
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => handleShowOptionSelect("Thông báo")}
              className="profile_account"
            >
              <div className="icon_text">
                <IoNotificationsSharp className="margin_icon" />
                {languageEN ? "Notification" : "Thông báo"}
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
            <div className="logout">
              <button onClick={handleLogOut}>
                {languageEN ? "Log out" : "Đăng xuất"}
              </button>
            </div>
          </div>
          <div className="profile_content--right">
            {showOption === "Tài khoản" && (
              <div>
                <h1>{languageEN ? "Account" : "Tài khoản"}</h1>
                <Accordion defaultActiveKey="0" className="z-n1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Email: {email.email}</Accordion.Header>
                    <Accordion.Body className="information_user">
                      <p>{languageEN ? "First name" : "Tên"}:</p>
                      <p>{languageEN ? "Last name" : "Họ"}:</p>
                      <p>{languageEN ? "Birthday" : "Ngày tháng năm sinh"}:</p>
                      <p>{languageEN ? "Address" : "Địa chỉ"}:</p>
                      <p>{languageEN ? "Phone" : "Số điện thoại"}:</p>
                      <p>
                        {languageEN ? "Identification" : "Căn cước công dân"}:
                      </p>
                      <button onClick={handleShowModalEditProfile}>
                        {" "}
                        {languageEN ? "Edit" : "Sửa"}
                      </button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <button
                  className="button_delete"
                  onClick={handleShowModalDeleteAccount}
                >
                  {languageEN ? "Delete the account" : "Xóa tài khoản"}
                </button>
              </div>
            )}
            {showOption === "Lịch sử" && (
              <div>
                <h1>{languageEN ? "History" : "Lịch sử"}</h1>
                <Accordion defaultActiveKey="0" className="z-n1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {languageEN
                        ? "Ticket purchase history"
                        : "Lịch sử mua vé"}
                    </Accordion.Header>
                    <Accordion.Body className="information_user">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>{languageEN ? "ID" : "STT"}</th>
                            <th>{languageEN ? "Airline" : "Hãng bay"}</th>
                            <th>{languageEN ? "Flight" : "Chuyến bay"}</th>
                            <th>
                              {languageEN ? "Cabin class" : "Hạng khoang"}
                            </th>
                            <th>
                              {languageEN ? "Start time" : "Thời gian bắt đầu"}
                            </th>
                            <th>
                              {languageEN ? "End time" : "Thời gian kết thúc"}
                            </th>
                            <th>{languageEN ? "Start day" : "Ngày bắt đầu"}</th>
                            <th>
                              {languageEN ? "Flight time" : "Thời gian bay"}
                            </th>
                            <th>{languageEN ? "Expense" : "Chi phí"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            )}
            {showOption === "Thông báo" && (
              <div>
                <Accordion defaultActiveKey="0" className="z-n1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {languageEN ? "Notification" : "Thông báo"}
                    </Accordion.Header>
                    <Accordion.Body className="information_user">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>{languageEN ? "ID" : "STT"}</th>
                            <th>{languageEN ? "Airline" : "Hãng bay"}</th>
                            <th>{languageEN ? "Flight" : "Chuyến bay"}</th>
                            <th>
                              {languageEN ? "Cabin class" : "Hạng khoang"}
                            </th>
                            <th>
                              {languageEN ? "Start time" : "Thời gian bắt đầu"}
                            </th>
                            <th>
                              {languageEN ? "End time" : "Thời gian kết thúc"}
                            </th>
                            <th>{languageEN ? "Start day" : "Ngày bắt đầu"}</th>
                            <th>
                              {languageEN ? "Flight time" : "Thời gian bay"}
                            </th>
                            <th>{languageEN ? "Expense" : "Chi phí"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            )}
          </div>
        </div>
        <ModalEditProfile
          show={isShowModalEditProfile}
          handle={handleHideModalEditProfile}
        />
        <ModalDeleteAccount
          show={isShowModalDeleteAccount}
          handle={handleHideModalDeleteAccount}
        />
      </div>
    </>
  );
};

export default ProfileUser;
