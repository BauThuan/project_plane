import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
function ModalDeleteAccount(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const { show, title, handle } = props;
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
                {languageEN
                  ? `Do you agree to delete this ${title} account?`
                  : `Bạn có đồng ý muốn xóa tài khoản ${title} này không ?`}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeleteAccount;
