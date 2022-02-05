import React from "react";
import Blogs from "../Blogs/Blogs";
import Exceptional from "../Exceptional/Exceptional";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Doctor from "./../Doctor/Doctor";
import ContactUs from "./../ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Exceptional />
      <MakeAppointment />
      <Testimonial />
      <Blogs />
      <Doctor />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
