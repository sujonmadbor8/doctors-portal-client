import React, { useEffect, useState } from "react";
import DoctorCard from "./../DoctorCard/DoctorCard";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section className="testimonial container mt-5 mb-5 pt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Doctors</h5>
      </div>
      <div className="">
        <div className="row w-100 mt-5 pt-3 col-md-4 d-flex justify-content-center">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctor;
