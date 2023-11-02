import React, { useState } from "react";
import "../../styles/Login.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { LogIn } from "../Redux/Action";
const Login = () => {
  const dispatch = useDispatch();
  const languageEN = useSelector((state) => state.languageEN);
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
    // try {
    //   if (!email.trim()) {
    //     toast.error(
    //       languageEN
    //         ? "Please fill in your email completely!"
    //         : "Vui lòng điền đầy đủ email !"
    //     );
    //     return;
    //   }
    //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    //     toast.error(
    //       languageEN
    //         ? "Email format is not correct!"
    //         : "Định dạng email chưa đúng !"
    //     );
    //     return;
    //   }
    //   if (!password.trim()) {
    //     toast.error(
    //       languageEN
    //         ? "Please fill in the password completely!"
    //         : "Vui lòng điền đầy đủ passowrd !"
    //     );
    //     return;
    //   }
    //   // navigate("/home/information-user");
    // } catch (error) {
    //   toast.error(
    //     languageEN
    //       ? "Incorrect account or password!"
    //       : "Tài khoản hoặc mật khẩu không chính xác !"
    //   );
    // }
    if (email === "1" && password === "1") {
      toast.success(
        languageEN ? "Logged in successfully !" : "Đăng nhập thành công !"
      );
      // navigate("/information-user");
      navigate("/home/page");
      dispatch(LogIn());
    }
  };

  const handleComeBackHome = () => {
    navigate("/home/page");
  };

  return (
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
        <div className="come_home" onClick={handleComeBackHome}>
          {languageEN ? "Home page" : "Trang chủ"}
        </div>
      </div>
    </div>
  );
};

export default Login;
