import React, { useEffect, useState } from "react";
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
  const profile = useSelector((state) => state.listProfile);
  const title = useSelector((state) => state.newTitle);
  const planeFlight = useSelector((state) => state.listOfRoundTrip);
  const planeFlightOneWay = useSelector((state) => state.listOfOneWay);
  const languageEN = useSelector((state) => state.languageEN);
  const [showNotiofication, setShowNotification] = useState(true);
  const [isShowModalEditProfile, setIsShowModalEditProfile] = useState(false);
  const [isShowModalDeleteAccount, setIsShowModalDeleteAccount] =
    useState(false);
  const [showOption, setShowOption] = useState("Tài khoản");
  const [listPlaneFlight, setListPlaneFlight] = useState([]);
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
      setShowNotification(false);
    }
  };

  const handleHideModalDeleteAccount = () => {
    setIsShowModalDeleteAccount(false);
  };

  const handleShowModalDeleteAccount = () => {
    setIsShowModalDeleteAccount(true);
  };

  useEffect(() => {
    if (title === "Khứ hồi") {
      setListPlaneFlight([...listPlaneFlight, planeFlight]);
    }
    if (title === "Một chiều") {
      setListPlaneFlight([...listPlaneFlight, planeFlightOneWay]);
    }
  }, [title]);
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
                {planeFlight.cabin ? (
                  <>
                    {showNotiofication === true ? (
                      <div className="text_notification">
                        {listPlaneFlight.length}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
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
                      <p>
                        {languageEN ? "First name" : "Tên"}:{" "}
                        <b>{profile.firstName}</b>
                      </p>
                      <p>
                        {languageEN ? "Last name" : "Họ"}:{" "}
                        <b>{profile.lastName}</b>
                      </p>
                      <p>
                        {languageEN ? "Birthday" : "Ngày tháng năm sinh"}:{" "}
                        <b>{profile.birthday}</b>
                      </p>
                      <p>
                        {languageEN ? "Address" : "Địa chỉ"}:{" "}
                        <b>{profile.address}</b>
                      </p>
                      <p>
                        {languageEN ? "Phone" : "Số điện thoại"}:{" "}
                        <b>{profile.phone}</b>
                      </p>
                      <p>
                        {languageEN ? "Identification" : "Căn cước công dân"}:{" "}
                        <b>{profile.identification}</b>
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
                      {listPlaneFlight.length > 0 ? (
                        <>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>{languageEN ? "Airline" : "Hãng bay"}</th>
                                <th>
                                  {languageEN
                                    ? "Starting location"
                                    : "Địa điểm bắt đầu"}
                                </th>
                                <th>
                                  {languageEN
                                    ? "End location"
                                    : "Địa điểm kết thúc"}
                                </th>
                                <th>
                                  {languageEN ? "Cabin class" : "Hạng khoang"}
                                </th>
                                <th>
                                  {languageEN ? "Start day" : "Ngày bắt đầu"}
                                </th>
                                <th>
                                  {languageEN
                                    ? "Total flight time"
                                    : "Tổng thời gian bay"}
                                </th>
                                <th>{languageEN ? "Expense" : "Chi phí"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {listPlaneFlight.map((item, index) => {
                                return (
                                  <tr key={`index ${index}`}>
                                    <td>Vietjet</td>
                                    <td>{item.addressStart}</td>
                                    <td>{item.addressEnd}</td>
                                    <td>{item.cabin}</td>
                                    <td>{item.startTime}</td>
                                    <td>2h</td>
                                    <td>1.000.000đ</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </>
                      ) : (
                        <div style={{ fontSize: "16px" }}>
                          {languageEN
                            ? "No purchase history !"
                            : "Không có lịch sử mua hàng !"}
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            )}
            {showOption === "Thông báo" && (
              <div>
                <h1>{languageEN ? "Notification" : "Thông báo"}</h1>
                <Accordion defaultActiveKey="0" className="z-n1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {languageEN ? "Notification" : "Thông báo"}
                    </Accordion.Header>
                    <Accordion.Body className="information_user">
                      {listPlaneFlight.length > 0 ? (
                        <div>
                          {listPlaneFlight.map((item, index) => {
                            return (
                              <p
                                style={{
                                  border: "1px solid #ccc",
                                  padding: "10px",
                                  borderRadius: "10px",
                                }}
                              >
                                {languageEN ? (
                                  <div>
                                    You purchased a <b>{item.cabin}</b> ticket
                                    from <b>{item.addressStart}</b> to{" "}
                                    <b>{item.addressEnd}</b> successful
                                  </div>
                                ) : (
                                  <div>
                                    Bạn đã mua vé <b>{item.cabin}</b> từ {""}
                                    <b>{item.addressStart}</b> đến {""}
                                    <b>{item.addressEnd}</b> thành công
                                  </div>
                                )}
                              </p>
                            );
                          })}
                        </div>
                      ) : (
                        <div style={{ fontSize: "16px" }}>
                          {languageEN
                            ? "There are no announcements!"
                            : "Không có thông báo nào !"}
                        </div>
                      )}
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
