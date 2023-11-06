import React from "react";
import ResultListOfFlight from "./ResultListOfFlight";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const ListOfFlights = () => {
  const languageEN = useSelector((state) => state.languageEN);
  const bgColor = useSelector((state) => state.changeBgColor);
  return (
    <div style={bgColor ? {} : { backgroundColor: "#1d2a35", color: "#fff" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN
            ? "List of Flight | Skyscanner"
            : "Danh sách vé máy bay | Skyscanner"}
        </title>
      </Helmet>
      <ResultListOfFlight />
    </div>
  );
};

export default ListOfFlights;
