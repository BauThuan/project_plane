import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const Home = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home/page");
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN ? "Home page | Skyscanner" : "Trang chủ | Skyscanner"}
        </title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
