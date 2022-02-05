import React, { useEffect, useState } from "react";

const AppointmentsByDate = ({ date }) => {
  console.log(date);
  const [appointments, setAppointments] = useState([]);
  // console.log(appointments);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div>
      <h2>Appointments: {appointments.length}</h2>
      {appointments.map((app) => (
        <li key={app._id}>{app.name}</li>
      ))}
    </div>
  );
};

export default AppointmentsByDate;
