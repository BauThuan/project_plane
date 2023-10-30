import React, { useState } from "react";
import "../../styles/Login.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
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

  const handleLogin = async () => {
    let { email, password } = authenticate;
    try {
      if (!email.trim()) {
        toast.error("Vui lòng điền đầy đủ email !");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        toast.error("Định dạng email chưa đúng !");
        return;
      }
      if (!password.trim()) {
        toast.error("Vui lòng điền đầy đủ passowrd !");
        return;
      }
    } catch (error) {
      toast.error("Tài khoản hoặc mật khẩu không chính xác !");
    }
  };

  return (
    <div className="login_container">
      <div className="login_container--content">
        <div className="title-content">LOGIN</div>
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
          Đăng nhập
        </div>
      </div>
    </div>
  );
};

export default Login;
