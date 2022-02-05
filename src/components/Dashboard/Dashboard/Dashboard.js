import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./../Sidebar/Sidebar";
import AppointmentsByDate from "./../AppointmentsByDate/AppointmentsByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "./../../../App";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
  marginLeft: "-36px",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [appointments, setAppointments] = useState([]);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   // console.log(date);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentsByDate", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, [selectedDate]);
  // console.log(appointments);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2 col-sm-4">
          <Sidebar />
        </div>
        <div className="col-md-5 col-sm-8">
          <Calendar
            className="border-0 shadow mb-3"
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="col-md-5 col-sm-12 text-center logOut">
          <AppointmentsByDate date={date} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
