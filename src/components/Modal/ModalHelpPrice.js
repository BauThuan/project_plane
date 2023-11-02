import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function ModalHelpPrice(props) {
  const languageEN = useSelector((state) => state.languageEN);
  const { show, title, handle } = props;
  const [problem, setProblem] = useState("");
  const handleConfirm = () => {
    if (!problem.trim()) {
      toast.error(
        languageEN
          ? "Please fill in the code problem you encountered in the blank box!"
          : "Vui lòng điền sự cố mã bạn gặp phải vào ô trống !"
      );
      return;
    }
    toast.success(
      languageEN
        ? "We have received your problem. Please check your personal email within 24 hours to receive a response from the customer service team!"
        : "Chúng tôi đã nhận được sự cố của bạn. Bạn kiểm tra email cá nhân trong 24h để nhận phản hồi từ đội ngũ chăm sóc khách hàng !"
    );
  };
  return (
    <>
      <Modal size="lg" show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN ? "Troubleshooting support" : "Hỗ trợ sự cố về"} {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <p>
                {languageEN
                  ? "We are truly sorry for the problem you encountered. They I am always willing to serve and answer all customer questions. We have received the information and will send an answer to customers as soon as possible via personal email. Please check your email within the next 24 hours."
                  : "Chúng tôi thực sự lấy làm tiếc với sự cố mà bạn gặp phải. Chúng tôi luôn luôn sẵn lòng phục vụ và giải đáp mọi thắc mắc của khách hàng. Chúng tôi đã nhận được thông tin và sẽ gửi câu trả lời sớm nhất cho quý khách hàng qua email cá nhân. Quý khách vui lòng kiểm tra email trong vòng 24h tới."}
              </p>
              <div className="col-12">
                <label>
                  {languageEN
                    ? `Describe your ${title} problem`
                    : `Mô tả sự cố về ${title} của bạn`}
                </label>
                <input
                  onChange={(e) => setProblem(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <p>
                {languageEN
                  ? "You can contact staff directly via hotline 19008198 for direct support."
                  : " Quý khách có thể liên hệ trực tiếp với nhân viên qua hotline 19008198 để được hỗ trợ trực tiếp."}
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
          <Button variant="primary" onClick={handleConfirm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalHelpPrice;
