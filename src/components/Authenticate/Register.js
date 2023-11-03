import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "../../styles/Register.scss";

const Register = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [againPassword, setAgainPassword] = useState(false);

  const [register, setRegister] = useState({
    email: "",
    password: "",
    againPassword: "",
  });
  const handleOnChange = (type, event) => {
    setRegister({ ...register, [type]: event.target.value });
  };

  const handleShowPass = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    }
    if (type === "againPassword") {
      setAgainPassword(!againPassword);
    }
  };

  const handleRegister = async () => {
    let { email, password, againPassword } = register;

    if (!email.trim()) {
      toast.error(
        languageEN
          ? "Please fill in your email completely!"
          : "Vui lòng điền đầy đủ email !"
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error(
        languageEN
          ? "Email format is not correct!"
          : "Định dạng email chưa đúng !"
      );
      return;
    }
    if (!password.trim()) {
      toast.error(
        languageEN
          ? "Please fill in the full password!"
          : "Vui lòng điền đầy đủ password !"
      );
      return;
    }
    if (!againPassword.trim()) {
      toast.error(
        languageEN
          ? "You need to re-enter your password!"
          : "Bạn cần phải nhập lại password !"
      );
      return;
    }
    if (password !== againPassword) {
      toast.error(
        languageEN
          ? "The passwords don't match!"
          : "Mật khâủ không trùng khớp với nhau !"
      );
      return;
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN ? "Register | Skyscanner" : "Đăng ký | Skyscanner"}
        </title>
      </Helmet>
      <div className="register_container">
        <div className="register_container--content">
          <div className="title-content">
            {languageEN ? "Register" : "Đăng ký"}
          </div>
          <div className="input-content">
            <input
              type="text"
              onChange={(e) => handleOnChange("email", e)}
              placeholder={
                languageEN ? "Email login ..." : "Email đăng nhập ..."
              }
            />
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => handleOnChange("password", e)}
              placeholder={languageEN ? "Password ..." : "Mật khẩu ..."}
            />
            <input
              type={againPassword ? "text" : "password"}
              onChange={(e) => handleOnChange("againPassword", e)}
              placeholder={
                languageEN ? "Re-enter Password..." : "Nhập lại Password ..."
              }
            />
            {showPassword ? (
              <AiFillEye
                className="icon"
                onClick={() => handleShowPass("password")}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => handleShowPass("password")}
                className="icon"
              />
            )}
            {againPassword ? (
              <AiFillEye
                className="icons"
                onClick={() => handleShowPass("againPassword")}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => handleShowPass("againPassword")}
                className="icons"
              />
            )}
          </div>
          <div className="register_confirm" onClick={handleRegister}>
            {languageEN ? "Register" : "Đăng ký"}
          </div>
          <div className="login_confirm" onClick={handleLogin}>
            {languageEN ? "Login" : "Đăng nhập"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
