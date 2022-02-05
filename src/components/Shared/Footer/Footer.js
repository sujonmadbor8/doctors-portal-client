import React from "react";
import "./Footer.css";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="">
      <footer
        className="text-center text-lg-start text-white "
        style={{ backgroundColor: "rgb(36, 41, 73)" }}
      >
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <br />
                <br />
                <br />
                <p>Emergenty Dental Care</p>
                <p>Check Up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check Up</p>
              </div>

              <div className="linkStyle col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  style={{ color: "#1cc7c1" }}
                  className="text-uppercase fw-bold  py-2"
                >
                  Services
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Emergency Dental Care
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Treatment of Personal Diseases
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Tooth Extraction
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
              </div>

              <div className="linkStyle col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  style={{ color: "#1cc7c1" }}
                  className="text-uppercase fw-bold  py-2"
                >
                  Oral Health
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Emergency Dental Care
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Treatment of Personal Diseases
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Tooth Extraction
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" href="#!" className="text-white">
                    Check Up
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6
                  style={{ color: "#1cc7c1" }}
                  className="text-uppercase fw-bold  py-2"
                >
                  Our Address
                </h6>
                <br />
                <br />
                <br />
                <p>New York - 101010 Hudson Yards</p>
                <div className=" d-flex justify-content-evenly">
                  <a href="https://www.facebook.com" target="_blank">
                    <FontAwesomeIcon
                      style={{
                        width: "50px",
                        color: "white",
                        height: "50px",
                        borderRadius: "25px",
                      }}
                      icon={faFacebook}
                    />
                  </a>
                  <a href="https://google.com" target="_blank">
                    <FontAwesomeIcon
                      style={{
                        color: "red",
                        width: "50px",
                        height: "50px",
                      }}
                      icon={faGooglePlus}
                    />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FontAwesomeIcon
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "white",
                      }}
                      icon={faTwitter}
                    />
                  </a>
                </div>
                <br />
                <br />
                <br />
                <p>Call Now</p>
                <bt className="btn btn-primary">+ 205550295</bt>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
