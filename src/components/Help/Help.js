import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import job from "../../image/job.png";
import price from "../../image/price.png";
import search from "../../image/search.png";
import travel from "../../image/travel.png";
import introduce from "../../image/introduce.png";
import ModalSearchHelp from "../Modal/ModalSearchHelp";
import ModalHelpReservations from "../Modal/ModalHelpReservations";
import ModalHelpPrice from "../Modal/ModalHelpPrice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { toast } from "react-toastify";
import "../../styles/root.scss";
import "../../styles/Help.scss";

const Help = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const [isShowModalSearchHelp, setIsShowModalSearchHelp] = useState(false);
  const [isShowModalHelpReservations, setIsShowModalHelpReservations] =
    useState(false);
  const [isShowModalHelpPrice, setIsShowModalHelpPrice] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const handleHideModalSearchHelp = () => {
    setIsShowModalSearchHelp(false);
  };
  const handleSearchHelp = (type) => {
    if (type === "search") {
      if (!searchInput.trim()) {
        toast.error("Vui lòng nhập thông tin sự cố mà bạn cần tìm kiếm !");
        return;
      }
      setIsShowModalSearchHelp(true);
    }
    if (type === "Đặt chỗ") {
      setIsShowModalHelpReservations(true);
    }
    if (type === "Giá") {
      setIsShowModalHelpPrice(true);
      setTitle(languageEN ? "Price" : "Giá");
    }
    if (type === "Tìm kiếm") {
      setIsShowModalHelpPrice(true);
      setTitle(languageEN ? "Search" : `${type}`);
    }
    if (type === "Du lịch") {
      setIsShowModalHelpPrice(true);
      setTitle(languageEN ? "Tourism" : `${type}`);
    }
    if (type === "Giới thiệu") {
      setIsShowModalHelpPrice(true);
      setTitle(languageEN ? "Introduce" : `${type}`);
    }
  };

  const handleHideModalReservations = () => {
    setIsShowModalHelpReservations(false);
  };

  const handleHideModalHelpPrice = () => {
    setIsShowModalHelpPrice(false);
  };
  return (
    <>
      <div className="help_container">
        <h1>
          {languageEN
            ? "How can we help you?"
            : "Chúng tôi có thể giúp gì cho bạn ?"}
        </h1>
        <div className="help_content">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="help_input"
            type="text"
            placeholder={
              languageEN
                ? "If you intentionally enter miscellaneous errors, we will permanently lock your account!"
                : "Nếu bạn cố tình nhập lỗi linh tinh thì chúng tôi sẽ khóa tài khoản của bạn vĩnh viễn !"
            }
          />
          <button
            onClick={() => handleSearchHelp("search")}
            className="help_btn"
          >
            {languageEN ? "Search" : "Tìm kiếm"}
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="help_information">
        <div className="help_title">
          <h2>
            {languageEN
              ? "Browse articles by topic"
              : "Duyệt bài viết theo chủ đề  "}
          </h2>
        </div>
        <div className="help_option">
          <div className="help_option_start">
            <div onClick={() => handleSearchHelp("Đặt chỗ")}>
              <img src={job} alt="Đặt chỗ" />
              <p>{languageEN ? "Reservations" : "Đặt chỗ"}</p>
            </div>
            <div onClick={() => handleSearchHelp("Giá")}>
              <img src={price} alt="Giá" />
              <p>{languageEN ? "Price" : "Giá"}</p>
            </div>
            <div onClick={() => handleSearchHelp("Tìm kiếm")}>
              <img src={search} alt="Tìm kiếm" />
              <p>{languageEN ? "Search" : "Tìm kiếm"}</p>
            </div>
          </div>
          <div className="help_option_end">
            <div onClick={() => handleSearchHelp("Du lịch")}>
              <img src={travel} alt="Du lịch" />
              <p>{languageEN ? "Tourism" : "Du lịch"}</p>
            </div>
            <div onClick={() => handleSearchHelp("Giới thiệu")}>
              <img src={introduce} alt="Giới thiệu" />
              <p>{languageEN ? "Introduce" : "Giới thiệu"}</p>
            </div>
          </div>
        </div>
      </div>
      <ModalSearchHelp
        show={isShowModalSearchHelp}
        handle={handleHideModalSearchHelp}
        title={searchInput}
      />
      <ModalHelpReservations
        show={isShowModalHelpReservations}
        handle={handleHideModalReservations}
      />
      <ModalHelpPrice
        show={isShowModalHelpPrice}
        handle={handleHideModalHelpPrice}
        title={title}
      />
    </>
  );
};

export default Help;
