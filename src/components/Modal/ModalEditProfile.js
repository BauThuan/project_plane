import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
function ModalEditProfile(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const {
    show,
    handle,
    handleUpdate,
    numberOfAdults,
    numberOfChildren,
    selectedOption,
  } = props;
  const [listTravelersCabin, setListTravelersCabin] = useState({
    cabin: "",
    adult: "",
    children: "",
  });

  const handleOnChange = (type, event) => {
    setListTravelersCabin({
      ...listTravelersCabin,
      [type]: event.target.value,
    });
  };
  const handleConfirm = () => {
    setListTravelersCabin({
      cabin: "",
      adult: "",
      children: "",
    });
    handleUpdate(listTravelersCabin);
    handle();
  };

  const handleCloseModal = () => {
    handle();
  };

  useEffect(() => {
    setListTravelersCabin({
      cabin: selectedOption,
      adult: numberOfAdults,
      children: numberOfChildren,
    });
  }, [numberOfAdults]);
  return (
    <>
      <Modal     show={show} onHide={handle}>
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
                <input className="form-control" type="text" />
              </div>
              <div className="col-6">
                <label>{languageEN ? "Last name" : "Họ"}</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-6 mt-3">
                <label>{languageEN ? "Email" : "Hộp thư cá nhân"}</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-6 mt-3">
                <label>{languageEN ? "Birthday" : "Ngày tháng năm sinh"}</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-12 mt-3">
                <label>{languageEN ? "Address" : "Địa chỉ"}</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-6 mt-3">
                <label>{languageEN ? "Phone" : "Số điện thoại"}</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-6 mt-3">
                <label>
                  {languageEN ? "Identification" : "Căn cước công dân"}
                </label>
                <input className="form-control" type="text" />
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
