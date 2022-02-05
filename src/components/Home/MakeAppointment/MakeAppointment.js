import React from "react";
import doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <section className="makeAppointment ">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="text-uppercase text-primary  mb-5">appointment</h5>
            <h1 className="my-4">
              Make an appointment <br />
              Today
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              quia! Tempore quaerat aspernatur facilis ut labore delectus
              mollitia iusto in!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
