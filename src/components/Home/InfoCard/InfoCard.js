import React from "react";
import "./InforCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white infoCard">
      <div
        className={`d-flex justify-content-center info-container info-${info.background}`}
      >
        <div className="pe-3">
          <FontAwesomeIcon className="infoIcon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
