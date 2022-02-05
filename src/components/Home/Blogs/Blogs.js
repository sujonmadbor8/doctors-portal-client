import React from "react";
import BlogsCard from "./../BlogsCard/BlogsCard";
import caoudi from "../../../images/people-3.png";
import jhon from "../../../images/people-2.png";
import rashed from "../../../images//people-1.png";

const blogsData = [
  {
    img: rashed,
    name: "Rashed Kabir",
    prescrived: "Check at least a doctor in a",
  },
  {
    img: caoudi,
    name: "Dr.Caoudi",
    prescrived: "2 times of brush in a dya can keep your healthy",
  },
  {
    img: jhon,
    name: "Dr,John Mitchel",
    date: new Date().getDay(),
    prescrived: "The tooth cancer is taking a challenge",
  },
];

const Blogs = () => {
  return (
    <section className="testimonial container mt-5 mb-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }} className="text-uppercase ">
          our blog
        </h5>
        <h2>From Our Blog News</h2>
      </div>
      <div className="">
        <div className="row w-100 mt-5 pt-5 col-md-4 d-flex justify-content-center">
          {blogsData.map((blogs) => (
            <BlogsCard blogs={blogs} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
