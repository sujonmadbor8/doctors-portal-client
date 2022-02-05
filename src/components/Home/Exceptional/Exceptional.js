import React from "react";
import treatment from "../../../images/treatment.png";

const Exceptional = () => {
  return (
    <section
      className="container d-flex align-items-center mt-5 pt-5 mb-5"
      style={{ height: "500px" }}
    >
      <img
        className="col-md-5 me-5"
        style={{ height: "100%" }}
        src={treatment}
        alt=""
      />
      <div className="col-md-7 ps-4">
        <h1 className="mb-5">
          Exceptional Dental <br /> Care, on Your Terms.
        </h1>
        <p style={{ textAlign: "justify" }}>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            consectetur laboriosam officia nobis ratione natus, voluptate earum
            rerum nam ab atque saepe ea similique vitae quos nihil sunt fuga
            fugit omnis. Voluptatibus, doloremque ipsum nesciunt blanditiis
            officiis nobis veniam rem consequatur nulla unde qui perferendis ea
            excepturi non repellat!
          </small>
        </p>
        <button className="btn btn-primary mt-5">Learn More</button>
      </div>
    </section>
  );
};

export default Exceptional;
