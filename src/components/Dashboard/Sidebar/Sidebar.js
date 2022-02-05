import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { UserContext } from "./../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:5000/isDoctor", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setIsDoctor(data));
  // }, []);

  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <ul className="list-unstyled">
        <li>
          <Link to="/doctor/dashboard" className="text-white" />
          <FontAwesomeIcon icon={faGripHorizontal} />
          <span>Dashboard</span>
        </li>
        {isDoctor || (
          <div>
            <li>
              <Link to="/doctor/appointment" className="text-white" />
              <FontAwesomeIcon icon={faCalendar} />
              <span>Appointment</span>
            </li>
            <li>
              <Link to="/doctor/patients" className="text-white" />
              <FontAwesomeIcon icon={faUsers} />
              <span>Patients</span>
            </li>
            <li>
              <Link to="/doctor/prescription" className="text-white" />
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Prescription</span>
            </li>
            <li>
              <Link
                to="/doctor/addDoctor"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Add Dorctor</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white" />
              <FontAwesomeIcon icon={faCog} />
              <span>Setting</span>
            </li>
          </div>
        )}
        <br /> <br /> <br />
        <li className="">
          <div className="">
            <Link to="/" className="text-white" />
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="ps-1">Log Out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
