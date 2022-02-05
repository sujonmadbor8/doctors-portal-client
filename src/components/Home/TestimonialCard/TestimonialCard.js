import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      class="card shadow border-0"
      style={{ width: "18rem", margin: "0 20px" }}
    >
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptatem reiciendis officiis mollitia quaerat neque facilis nobis
          sit vero exercitationem.
        </p>
        <div className="d-flex ">
          <div>
            <img
              style={{ height: "50px", marginRight: "30px" }}
              src={testimonial.img}
              alt=""
            />
          </div>
          <div>
            <h5 class="card-title">{testimonial.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
