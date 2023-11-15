import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { toast } from "react-toastify";

function ModalDeleteAccount(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const email = useSelector((state) => state.listLogin);
  const { show, handle } = props;

  const handleConFirm = () => {
    window.location.reload();
    toast.success(
      languageEN
        ? "Account deleted successfully!"
        : "Xóa tài khoản thành công !"
    );
  };
  return (
    <>
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN ? "Delete personal account" : "Xóa tài khoản cá nhân"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <p>
                {languageEN ? (
                  <div>
                    Do you agree to delete this <b>{email.email}</b> account ?
                  </div>
                ) : (
                  <div>
                    Bạn có đồng ý muốn xóa tài khoản <b>{email.email}</b> này
                    không ?
                  </div>
                )}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
          <Button onClick={handleConFirm} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeleteAccount;
