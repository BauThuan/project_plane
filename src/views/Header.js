import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  LanguageEN,
  LanguageVN,
  LightChangeBgColor,
  DarkChangeBgColor,
} from "../components/Redux/Action";
import { Link } from "react-router-dom";
import bg from "../image/logo2.png";
import { LogOut } from "../components/Redux/Action";
import { toast } from "react-toastify";
// import { VscColorMode } from "react-icons/vsc";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/root.scss";
import "../styles/Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const languageEN = useSelector((state) => state.languageEN);
  const bgColor = useSelector((state) => state.changeBgColor);
  const isLogIn = useSelector((state) => state.isLogIn);
  const [isChangeBgColor, setIsChangeBgColor] = useState("dark");
  console.log(">>> check data", languageEN);
  const handleChangeLanguage = (type) => {
    if (type === "VN") {
      dispatch(LanguageVN());
    }
    if (type === "EN") {
      dispatch(LanguageEN());
    }
  };
  const handleLogOut = () => {
    toast.success(
      languageEN ? "Successfully logged out!" : "Đăng xuất thành công !"
    );
    dispatch(LogOut());
  };

  const handleChangeBackgroundColor = (type) => {
    if (type === "dark") {
      setIsChangeBgColor("light");
      dispatch(DarkChangeBgColor());
    }
    if (type === "light") {
      setIsChangeBgColor("dark");
      dispatch(LightChangeBgColor());
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={bgColor ? "light" : "dark"}
      data-bs-theme={bgColor ? "light" : "dark"}
      className="bg-body-tertiary header_container z-2"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/home/page" className="text-decoration-none">
            <img className="logo" src={bg} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isChangeBgColor === "dark" ? (
              <Nav.Link>
                <MdNightlight
                  onClick={() => handleChangeBackgroundColor("dark")}
                  style={{ fontSize: "20px" }}
                />
              </Nav.Link>
            ) : (
              <Nav.Link>
                <MdOutlineLightMode
                  onClick={() => handleChangeBackgroundColor("light")}
                  style={{ fontSize: "20px" }}
                />
              </Nav.Link>
            )}
          {/* đang gặp lỗi thẻ a lồng nhau ở header */}
            <Nav.Link>
              <Link to="/home/help" className="text-decoration-none">
                {languageEN ? "Help" : "Trợ giúp"}
              </Link>
            </Nav.Link>
            <NavDropdown
              className="text_color text-decoration-none"
              title="Language"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleChangeLanguage("VN")}>
                Vietnamese
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleChangeLanguage("EN")}>
                English
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {isLogIn ? (
                <NavDropdown
                  title="thuan@gmail.com"
                  id="collapsible-nav-dropdown"
                  className="text-decoration-none text_color"
                >
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none"
                      to="/home/profile-user"
                    >
                      {languageEN ? "Profile User" : "Thông tin cá nhân"}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      onClick={handleLogOut}
                      className="text-decoration-none"
                      to="/"
                    >
                      {languageEN ? "Logout" : "Đăng xuất"}
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" className="text-decoration-none text_color">
                  {languageEN ? "Log in" : "Đăng nhập"}
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
