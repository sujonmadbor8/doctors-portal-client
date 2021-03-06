import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "./../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Flouride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
