import React from "react";
import ResultListOfFlight from "./ResultListOfFlight";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const ListOfFlights = () => {
  const languageEN = useSelector((state) => state.languageEN);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {languageEN
            ? "List of Flight | Skyscanner"
            : "Danh sách vé máy bay | Skyscanner"}
        </title>
      </Helmet>
      <ResultListOfFlight />
    </>
  );
};

export default ListOfFlights;
