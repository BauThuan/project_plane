import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function ModalHelpReservations(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const { show, handle } = props;
  const [listMenu, setListMenu] = useState({
    name: "",
    date: "",
    time: "",
    partner: "",
    pay: "",
    confirm: "",
  });
  const handleOnChangeMenu = (type, event) => {
    setListMenu({ ...listMenu, [type]: event.target.value });
  };
  const handleClose = () => {
    setListMenu({
      name: "",
      date: "",
      time: "",
      partner: "",
      pay: "",
      confirm: "",
    });
    handle();
  };
  const handleSaveConfirm = () => {
    let { name, date, time, partner, pay, confirm } = listMenu;

    if (!name.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your full name!"
          : "Vui lòng điền đẩu đủ tên !"
      );
      return;
    }
    if (!date.trim()) {
      toast.error(
        languageEN ? "Please fill in the full date!" : "Vui lòng điền đủ date !"
      );
      return;
    }
    if (!time.trim()) {
      toast.error(
        languageEN ? "Please fill in enough time!" : "Vui lòng điền đủ time !"
      );
      return;
    }
    if (!partner.trim()) {
      toast.error(
        languageEN ? "Please fill in partner!" : "Vui lòng điền đủ partner !"
      );
      return;
    }
    if (!pay.trim()) {
      toast.error(
        languageEN
          ? "Please fill out payment in full!"
          : "Vui lòng điền đủ pay !"
      );
      return;
    }
    if (!confirm.trim()) {
      toast.error(
        languageEN
          ? "Please fill out confirmation!"
          : "Vui lòng điền đủ confirm !"
      );
      return;
    }
    if (!isNaN(name.trim())) {
      toast.error(
        languageEN
          ? "This partner field cannot be a number!"
          : "Trường partner này không thể là số !"
      );
      return;
    }
    if (!isNaN(partner.trim())) {
      toast.error(
        languageEN
          ? "This partner field cannot be a number!"
          : "Trường partner này không thể là số !"
      );
      return;
    }

    handle();
  };
  return (
    <>
      <Modal size="lg" show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN
              ? "Support for booking problems"
              : "Hỗ trợ sự cố đặt chỗ"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-4">
                <label>
                  {languageEN
                    ? "Who did you book from?"
                    : "Bạn đã đặt chỗ từ ai ?"}
                </label>
                <input
                  onChange={(e) => handleOnChangeMenu("name", e)}
                  className="form-control"
                  type="text"
                  value={listMenu.name}
                />
              </div>
              <div className="col-4">
                <label>
                  {languageEN
                    ? "What time did you buy the ticket?"
                    : "Thời gian mà bạn mua vé ?"}
                </label>
                <input
                  onChange={(e) => handleOnChangeMenu("date", e)}
                  className="form-control"
                  type="date"
                  value={listMenu.date}
                />
              </div>
              <div className="col-4">
                <label>
                  {languageEN
                    ? "What time did you buy?"
                    : "Bạn mua vào lúc mấy giờ ?"}
                </label>
                <input
                  onClick={(e) => handleOnChangeMenu("time", e)}
                  className="form-control"
                  type="time"
                  value={listMenu.time}
                />
              </div>
              <div className="col-12">
                <label>
                  {languageEN
                    ? "Contact information of the partner you purchased the tickets from?"
                    : "Thông tin liên hệ của đối tác bạn mua vé ?"}
                </label>
                <input
                  onChange={(e) => handleOnChangeMenu("partner", e)}
                  className="form-control"
                  type="text"
                  value={listMenu.partner}
                />
              </div>
              <div className="col-6">
                <label>
                  {languageEN
                    ? "Have you paid yet?"
                    : "Bạn đã thanh toán chưa ?"}
                </label>
                <select
                  onChange={(e) => handleOnChangeMenu("pay", e)}
                  class="form-select"
                  aria-label="Default select example"
                  value={listMenu.pay}
                >
                  <option value="">--------</option>
                  <option value="Đã thanh toán">
                    {languageEN ? "Paid" : "Đã thanh toán"}
                  </option>
                  <option value="Chưa thanh toán">
                    {languageEN ? "Unpaid" : "Chưa thanh toán"}
                  </option>
                </select>
              </div>
              <div className="col-6">
                <label>
                  {languageEN
                    ? "You have not received confirmation of your ticket purchase"
                    : "Bạn chưa nhận được xác nhận đã mua vé"}
                </label>
                <select
                  onChange={(e) => handleOnChangeMenu("confirm", e)}
                  class="form-select"
                  aria-label="Default select example"
                  value={listMenu.confirm}
                >
                  <option value="3">--------</option>
                  <option value="Đã nhận được xác nhận">
                    {languageEN
                      ? "Confirmation received"
                      : " Đã nhận được xác nhận"}
                  </option>
                  <option value="Chưa nhận được xác nhận">
                    {languageEN
                      ? "Haven't received confirmation"
                      : " Chưa nhận được xác nhận"}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveConfirm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalHelpReservations;
