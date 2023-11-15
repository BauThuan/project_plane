import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { isProfile } from "../Redux/Action";
function ModalEditProfile(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const dispatch = useDispatch();
  const { show, handle, handleUpdate } = props;
  const [profileUser, setProfileUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    address: "",
    phone: "",
    identification: "",
  });

  const handleOnChange = (type, event) => {
    setProfileUser({ ...profileUser, [type]: event.target.value });
  };
  const handleConfirm = () => {
    dispatch(isProfile(profileUser));
    handle();
  };

  const handleCloseModal = () => {
    handle();
  };
  return (
    <>
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN
              ? "Edit personal information"
              : "Chỉnh sửa thông tin cá nhân"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_coantainer container">
            <div className="modal_content row">
              <div className="modal_describe col-6">
                <label>{languageEN ? "First name" : "Tên"}</label>
                <input
                  onChange={(e) => handleOnChange("firstName", e)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-6">
                <label>{languageEN ? "Last name" : "Họ"}</label>
                <input
                  onChange={(e) => handleOnChange("lastName", e)}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="col-6 mt-3">
                <label>{languageEN ? "Birthday" : "Ngày tháng năm sinh"}</label>
                <input
                  onChange={(e) => handleOnChange("birthday", e)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-6 mt-3">
                <label>{languageEN ? "Address" : "Địa chỉ"}</label>
                <input
                  onChange={(e) => handleOnChange("address", e)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-6 mt-3">
                <label>{languageEN ? "Phone" : "Số điện thoại"}</label>
                <input
                  onChange={(e) => handleOnChange("phone", e)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-6 mt-3">
                <label>
                  {languageEN ? "Identification" : "Căn cước công dân"}
                </label>
                <input
                  onChange={(e) => handleOnChange("identification", e)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalEditProfile;
