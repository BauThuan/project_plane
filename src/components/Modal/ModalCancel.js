import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
function ModalCancel(props) {
  const { show, handle } = props;
  const languageEN = useSelector((state) => state.languageEN);
  const navigate = useNavigate();
  const handleConfirm = () => {
    toast.success(
      languageEN ? "Cancellation successful!" : "Huỷ bỏ thành công !"
    );
    navigate("/login");
  };
  return (
    <>
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN
              ? "Cancel updating personal information"
              : "Hủy cập nhật thông tin cá nhân"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <p>
                {languageEN
                  ? "Are you sure you want to cancel? If you cancel, you will return to the login screen"
                  : "Bạn có chắc chắn muốn hủy không? Nếu hủy bạn sẽ trở về màn hình đăng nhập"}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCancel;
