import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import AppointmentDataTable from "./../Dashboard/AppointmentDataTable/AppointmentDataTable";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  console.log(appointments);
  return (
    <div className="contianer-fluid d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="row">
        <div className="col-md-10 m-4 " style={{ width: "1080px" }}>
          <h5 className="text-brand">All Patients</h5>
          <AppointmentDataTable appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
