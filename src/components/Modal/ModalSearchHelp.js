import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function ModalSearchHelp(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const { show, title, handle } = props;
  const [emailContact, setEmailContact] = useState("");
  const handleOnChange = (type, event) => {};
  return (
    <>
      <Modal size="lg" show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN
              ? "Solve problems & queries"
              : "Giải quyết sự cố & thắc mắc"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <p>
                {languageEN
                  ? `We are truly sorry for the problem you encountered. They
                  I am always willing to serve and answer all your questions
                  client. For your problem: ${title}, we have
                  receive the information and will send you an answer as soon as possible
                  Order via personal email. Please check your email in
                  within the next 24 hours.`
                  : `Chúng tôi thực sự lấy làm tiếc với sự cố mà bạn gặp phải. Chúng
                tôi luôn luôn sẵn lòng phục vụ và giải đáp mọi thắc mắc của
                khách hàng. Với sự cố của bạn là : ${title}, chúng tôi đã
                nhận được thông tin và sẽ gửi câu trả lời sớm nhất cho quý khách
                hàng qua email cá nhân. Quý khách vui lòng kiểm tra email trong
                vòng 24h tới.`}
              </p>
              <div className="col-12">
                <label>
                  {languageEN
                    ? "Enter your personal email address"
                    : "Nhập địa chỉ email cá nhân của bạn"}
                </label>
                <input className="form-control" type="text" />
              </div>
              <p>
                {languageEN
                  ? "You can contact staff directly via hotline 19008198 for direct support."
                  : "Quý khách có thể liên hệ trực tiếp với nhân viên qua hotline 19008198 để được hỗ trợ trực tiếp."}
              </p>
              <p>
                {languageEN
                  ? "Thank you for using the service. Best regards !"
                  : "Cảm ơn quý khách đã sử dụng dịch vụ. Trân trọng !"}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalSearchHelp;
