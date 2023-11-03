import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./components/Redux/Store";
import Home from "./views/Home";
import Login from "./components/Authenticate/Login";
import Register from "./components/Authenticate/Register";
import HomePage from "./components/Home/HomePage";
import Help from "./components/Help/Help";
import RoutePage from "./views/RoutePage";
import ListOfFlights from "./components/ListOfFlights/ListOfFlights";
import FlightDetails from "./components/FlightDetails/FlightDetails";
import TicketBook from "./components/TicketBooking/TicketBook";
import InformationUser from "./components/InformationUser/InformationUser";
import History from "./components/History/History";
import ProfileUser from "./components/InformationUser/ProfileUser";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<RoutePage />} />
        <Route path="/home" element={<Home />}>
          <Route path="list-of-flight" element={<ListOfFlights />} />
          <Route path="page" element={<HomePage />} />
          <Route path="flight-details" element={<FlightDetails />} />
          <Route path="ticket-booking" element={<TicketBook />} />
          <Route path="help" element={<Help />} />
          <Route path="history" element={<History />} />
          <Route path="profile-user" element={<ProfileUser />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/information-user" element={<InformationUser />} />
      </Routes>
    </Provider>
  );
};

export default App;
