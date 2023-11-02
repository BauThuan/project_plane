import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../styles/ModalSelectPeople.scss";
function ModalSelectPeople(props) {
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
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>
            {languageEN
              ? "Travelers and cabin class"
              : "Du khách và hạng khoang"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_coantainer container">
            <div className="modal_content row">
              <div className="modal_describe col-12">
                <label>{languageEN ? "Cabin class" : "Hạng Khoang"}</label>
                <select
                  style={{ cursor: "pointer" }}
                  class="form-select"
                  aria-label="Default select example"
                  value={listTravelersCabin.cabin}
                  onChange={(event) => handleOnChange("cabin", event)}
                >
                  <option value={languageEN ? "Common" : "Phổ thông"}>
                    {languageEN ? "Common" : "Phổ thông"}
                  </option>
                  <option
                    value={
                      languageEN ? "Special universal" : "Phổ thông đặc biệt"
                    }
                  >
                    {languageEN ? "Special universal" : "Phổ thông đặc biệt"}
                  </option>
                  <option value={languageEN ? "Trader" : "Thương gia"}>
                    {languageEN ? "Trader" : "Thương gia"}
                  </option>
                  <option value={languageEN ? "First class" : "Hạng nhất"}>
                    {languageEN ? "First class" : "Hạng nhất"}
                  </option>
                </select>
              </div>
              <div className="col-6 mt-3">
                <label>
                  {languageEN
                    ? "Many adults (16+ years old)"
                    : "Nhiều người lớn (16+ tuổi)"}
                </label>
                <select
                  style={{ cursor: "pointer" }}
                  class="form-select"
                  aria-label="Default select example"
                  value={listTravelersCabin.adult}
                  onChange={(event) => handleOnChange("adult", event)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="col-6 mt-3">
                <label>
                  {languageEN
                    ? "Many children (0-15 old)"
                    : "Nhiều trẻ em (0-15 tuổi)"}
                </label>
                <select
                  style={{ cursor: "pointer" }}
                  class="form-select"
                  aria-label="Default select example"
                  value={listTravelersCabin.children}
                  onChange={(event) => handleOnChange("children", event)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
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
export default ModalSelectPeople;
