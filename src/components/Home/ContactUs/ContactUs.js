import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUs ">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-7 text-white py-5 m-auto">
            <h5 className="text-uppercase text-primary  mb-2">contact us</h5>
            <h1 className="my-3">Always Connect with us</h1>
            <form>
              <div class="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email*"
                />
              </div>

              <div class="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Subject*"
                />
              </div>
              <textarea
                className="form-control mb-3"
                style={{ resize: "none", height: "150px" }}
                placeholder="Your Message*"
              ></textarea>
              <button class="btn btn-primary form-control" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
