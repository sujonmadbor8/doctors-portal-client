import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorCard = ({ doctor }) => {
  console.log(doctor);
  const { name, image } = doctor.doctor;
  return (
    <div
      class="card shadow border-2 p-3 mb-4 m-auto"
      style={{ width: "15rem", margin: "0 20px" }}
    >
      <div className="text-center">
        <div className="pb-2">
          <img
            style={{ height: "200px", width: "200px", marginRight: "5px" }}
            src={`data:image/png;base64,${image}`}
            alt=""
          />
        </div>
        <div>
          <h5 class="card-title">{name}</h5>

          <h6 class="card-subtitle mb-2 text-muted">
            <FontAwesomeIcon className="text-primary me-1" icon={faPhone} />
            <small> +61 452 200 126</small>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
