import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import ModalCancel from "../Modal/ModalCancel";
import { toast } from "react-toastify";
import "../../styles/InformationUser.scss";
import "../../styles/root.scss";

const InformationUser = () => {
  const navigate = useNavigate();
  const languageEN = useSelector((state) => state.languageEN);
  const [informationUser, setInformationUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    address: "",
    email: "",
    phone: "",
    identification: "",
  });
  const [isShowModalCancel, setIsShowModalCancel] = useState(false);

  const handleOnChange = (type, event) => {
    setInformationUser({ ...informationUser, [type]: event.target.value });
  };
  const handleCancel = () => {
    setIsShowModalCancel(true);
  };

  const handleHideModalCancel = () => {
    setIsShowModalCancel(false);
  };

  const handleConfirm = () => {
    let {
      firstName,
      lastName,
      address,
      birthday,
      email,
      phone,
      identification,
    } = informationUser;
    if (!firstName.trim()) {
      toast.error(
        languageEN
          ? "Please fill in full Firts name !"
          : "Vui lòng điền đầy đủ Tên !"
      );
      return;
    }
    if (!lastName.trim()) {
      toast.error(
        languageEN
          ? "Please fill in full Last name !"
          : "Vui lòng điền đầy đủ Họ !"
      );
      return;
    }
    if (!address.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your full address!"
          : "Vui lòng điền đầy đủ địa chỉ !"
      );
      return;
    }
    if (!birthday.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your full date of birth!"
          : "Vui lòng điền đầy đủ ngày tháng năm sinh !"
      );
      return;
    }
    if (!email.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your full email address!"
          : "Vui lòng điền đầy đủ địa chỉ email !"
      );
      return;
    }
    if (!phone.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your full phone number!"
          : "Vui lòng điền đầy đủ số điện thoại !"
      );
      return;
    }
    if (!identification.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your citizen identification card!"
          : "Vui lòng điền đủ căn cước công dân !"
      );
      return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      toast.error(
        languageEN
          ? "Email format is not correct!"
          : "Định dạng email chưa đúng !"
      );
      return;
    }
    if (isNaN(phone.trim())) {
      toast.error(
        languageEN
          ? "Phone numbers cannot be words!"
          : "Số điện thoại không thể là chữ !"
      );
      return;
    }
    if (phone.trim().length !== 10) {
      toast.error(
        languageEN
          ? "Phone number format must have 10 digits"
          : "Định dạng số điện thoại phải đủ 10 số"
      );
      return;
    }
    if (isNaN(identification.trim())) {
      toast.error(
        languageEN
          ? "Citizen ID cannot be words!"
          : "Căn cước công dân không thể là chữ !"
      );
      return;
    }
    if (identification.trim().length !== 12) {
      toast.error(
        languageEN
          ? "Citizen ID format must have 12 numbers"
          : "Định dạng căn cước công dân phải đủ 12 số"
      );
      return;
    }
    toast.success(
      languageEN
        ? "Updated personal information successfully!"
        : "Cập nhật thông tin cá nhân thành công !"
    );
    navigate("/home/profile-user");
  };
  return (
    <div className="information_container">
      <div className="information_content row">
        <h1>
          {languageEN
            ? "Update personal information"
            : "Cập nhật thông tin cá nhân"}
        </h1>
        <div className="input_firstName col-6">
          <label>{languageEN ? "First name" : "Nhập tên người dùng"}</label>
          <input
            type="text"
            value={informationUser.firstName}
            onChange={(e) => handleOnChange("firstName", e)}
            placeholder={languageEN ? "Example: Thuan" : "VD: Thuận"}
          />
        </div>
        <div className="input_lastName col-6">
          <label>{languageEN ? "Last name" : "Nhập họ người dùng"}</label>
          <input
            type="text"
            value={informationUser.lastName}
            onChange={(e) => handleOnChange("lastName", e)}
            placeholder={languageEN ? "Example: Tran Van" : "VD: Trần Văn"}
          />
        </div>
        <div className="input_brithday col-6">
          <label>{languageEN ? "Date of birth" : "Ngày tháng năm sinh"}</label>
          <input
            type="date"
            value={informationUser.birthday}
            onChange={(e) => handleOnChange("birthday", e)}
          />
        </div>
        <div className="input_email col-6">
          <label>{languageEN ? "Email" : "Hộp thư liên hệ"}</label>
          <input
            type="text"
            value={informationUser.email}
            onChange={(e) => handleOnChange("email", e)}
            placeholder={
              languageEN
                ? "Example: bauthuanxd@gmail.com"
                : "VD: bauthuanxd@gmail.com"
            }
          />
        </div>
        <div className="input_address">
          <label>{languageEN ? "Address" : "Địa chỉ"}</label>
          <input
            type="text"
            value={informationUser.address}
            onChange={(e) => handleOnChange("address", e)}
            placeholder={
              languageEN
                ? "Example: Alley 75, Giai Phong, Dong Tam ward, Hai Ba Trung district, Hanoi"
                : "VD: Ngõ 75, Giải Phóng, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội"
            }
          />
        </div>
        <div className="input_phone col-6">
          <label>{languageEN ? "Phone" : "Số điện thoại"}</label>
          <input
            type="text"
            value={informationUser.phone}
            onChange={(e) => handleOnChange("phone", e)}
            placeholder={languageEN ? "Example: 0824064068" : "VD: 0824064068"}
          />
        </div>
        <div className="input_identification col-6">
          <label>
            {languageEN ? "Citizen identification card" : "Căn cước công dân"}
          </label>
          <input
            type="text"
            value={informationUser.identification}
            onChange={(e) => handleOnChange("identification", e)}
            placeholder={
              languageEN ? "Example: 036202008009" : "VD: 036202008009"
            }
          />
        </div>
        <div className="confirm">
          <button onClick={handleConfirm}>
            {languageEN ? "Confirm" : "Xác nhận"}
          </button>
          <button onClick={handleCancel}>
            {languageEN ? "Cancel" : "Hủy"}
          </button>
        </div>
      </div>
      <ModalCancel show={isShowModalCancel} handle={handleHideModalCancel} />
    </div>
  );
};

export default InformationUser;
