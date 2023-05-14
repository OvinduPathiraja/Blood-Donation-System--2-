import React, { useState } from "react";
import "./Navigation.css";
import Table from "./Table";


function Navigation(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsButtonOpen(!isButtonOpen);
  };

  return (
    <div>
      <button
        className={`sidebar-toggle ${isButtonOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <i className={`fas ${isButtonOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        {props.user === "donor" && (
          <ul className="sidebar-nav">
            <li>
              <a href="/Dashboards">DONOR DASHBOARD</a>
            </li>
            <li>
              <a href="/Donorhistory">DONATION HISTORY </a>
            </li>
            <li>
              <a href="/Donorpoints">VIEW DONOR POINTS</a>
            </li>
            <li>
              <a href="/FAQS">FAQS</a>
            </li>
            <li>
              <a href="/Location1">FIND NEAREST LOCATION</a>
            </li>
            <li>
              <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "admin" && (
          <ul className="sidebar-nav">
            <li>
            <a href="/Dashboards">ADMIN DASHBOARD</a>
            </li>
            <li>
            <a href="/Pendingrequests">PENDING REQUESTS</a>
            </li>
            <li>
            <a href="/Acceptedrequests">ACCEPTED REQUESTS</a>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "hospital" && (
          <ul className="sidebar-nav">
            <li>
            <a href="/Dashboards">HOSPITAL DASHBOARD</a>
            </li>
            <li>
            <a href="/HospitalChart">BLOOD COUNT</a>
            </li>
            <li>
            <a href="/BloodBankSearch">BLOOD BANK SEARCH</a>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "bloodbank" && (
          <ul className="sidebar-nav">
            <li>
              <a href="/Dashboards">DASHBOARD</a>
            </li>
            <li>
              <a href="/BloodBankChart">BLOOD CHART</a>
            </li>
            <li>
              <a href="/Donorsearch">DONOR BASE</a>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
