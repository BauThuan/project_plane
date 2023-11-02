import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoutePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return <></>;
};

export default RoutePage;
