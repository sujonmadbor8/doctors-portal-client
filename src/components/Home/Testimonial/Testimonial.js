import React from "react";
import "./Testimonial.css";
import winson from "../../../images/people-1.png";
import add from "../../../images/people-2.png";
import mad from "../../../images/people-3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimoniaData = [
  { img: winson, name: "Winson Herry", city: "California" },
  { img: add, name: "add Herry", city: "California" },
  { img: mad, name: "mad Herry", city: "California" },
];

const Testimonial = () => {
  return (
    <section className="testimonial container mt-5 mb-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }} className="text-uppercase ">
          testimonial
        </h5>
        <h2>
          What's Our Patients <br />
          Says
        </h2>
      </div>
      <div className="">
        <div className="row w-100 mt-5 pt-5 col-md-4 d-flex justify-content-center">
          {testimoniaData.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
