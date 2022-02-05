import React from "react";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InfoCard";
const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+145646464645",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
