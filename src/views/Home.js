import React from "react";
import Header from "./Header";
import Flight from "../components/Home/Flight";
import Introduce from "../components/Home/Introduce";
import ListTicket from "../components/Home/ListTicket";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Flight />
      <Introduce />
      <ListTicket />
      <Footer />
    </>
  );
};

export default Home;
