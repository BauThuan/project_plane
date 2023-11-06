import React from "react";
import Flight from "./Flight";
import Introduce from "./Introduce";
import ListTicket from "./ListTicket";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HomePage = () => {
  const bgColor = useSelector((state) => state.changeBgColor);
  return (
    <>
      <Flight />
      <div style={bgColor ? {} : { backgroundColor: "#1d2a35", color: "#fff" }}>
        <Introduce />
        <ListTicket />
      </div>
    </>
  );
};

export default HomePage;
