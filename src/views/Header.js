import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { LanguageEN, LanguageVN } from "../components/Redux/Action";
import { Link } from "react-router-dom";
import bg from "../image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/root.scss";
import "../styles/Header.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const languageEN = useSelector((state) => state.languageEN);
  console.log(">>> check data", languageEN);
  const { loginSuccess } = props;
  const handleChangeLanguage = (type) => {
    if (type === "VN") {
      dispatch(LanguageVN());
    }
    if (type === "EN") {
      dispatch(LanguageEN());
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      data-bs-theme="light"
      className="bg-body-tertiary header_container z-0"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/home/page" className="text-decoration-none">
            <img className="logo" src={bg} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/home/help" className="text-decoration-none">
                {languageEN ? "Help" : "Trợ giúp"}
              </Link>
            </Nav.Link>
            <NavDropdown
              className="text_color"
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
              {loginSuccess ? (
                <NavDropdown
                  title="thuan@gmail.com"
                  id="collapsible-nav-dropdown"
                  className="text-decoration-none text_color"
                >
                  <NavDropdown.Item>
                    <Link className="text-decoration-none" to="/">
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
