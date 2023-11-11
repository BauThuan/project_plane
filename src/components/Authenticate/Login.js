import React, { useState } from "react";
import "../../styles/Login.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { LogIn } from "../Redux/Action";
import { Helmet } from "react-helmet";
const Login = () => {
  const dispatch = useDispatch();
  const languageEN = useSelector((state) => state.languageEN);
  const loginSucc = useSelector((state) => state.listLogin);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [authenticate, setAuthenticate] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (type, event) => {
    setAuthenticate({ ...authenticate, [type]: event.target.value });
  };

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    let { email, password } = authenticate;
    if (
      email.trim() === loginSucc.email &&
      password.trim() === loginSucc.password
    ) {
      toast.success(
        languageEN ? "Logged in successfully !" : "Đăng nhập thành công !"
      );
      // toast.warning(
      //   languageEN
      //     ? "Please update your personal information!"
      //     : "Vui lòng cập nhật thông tin cá nhân !"
      // );
      navigate("/home");
      dispatch(LogIn());
      return;
    }
    if (email !== loginSucc.email && password !== loginSucc.password) {
      toast.error(
        languageEN
          ? "Account password is incorrect!"
          : "Tài khoản mật khâủ không chính xác !"
      );
    }
  };

  const handleComeBackHome = () => {
    navigate("/home/page");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  console.log(">>> chekc login", loginSucc.email);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN ? "Login | Skyscanner" : "Đăng nhập | Skyscanner"}
        </title>
      </Helmet>
      <div className="login_container">
        <div className="login_container--content">
          <div className="title-content">
            {languageEN ? "LOGIN" : "Đăng nhập"}
          </div>
          <div className="input-content">
            <input
              type="text"
              onChange={(e) => handleOnChange("email", e)}
              placeholder="Email đăng nhập ..."
            />
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => handleOnChange("password", e)}
              placeholder="Password ..."
            />
            {showPassword ? (
              <AiFillEye className="icon" onClick={handleShowPass} />
            ) : (
              <AiFillEyeInvisible onClick={handleShowPass} className="icon" />
            )}
          </div>
          <div className="login_confirm" onClick={handleLogin}>
            {languageEN ? "Log in" : "Đăng nhập"}
          </div>
          <div className="come_home" onClick={handleRegister}>
            {languageEN
              ? "You don't have an account yet? Register"
              : "Bạn chưa có tài khoản? Đăng ký"}
          </div>
          <div className="come_home" onClick={handleComeBackHome}>
            {languageEN ? "Home page" : "Trang chủ"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
