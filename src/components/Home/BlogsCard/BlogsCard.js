import React from "react";

const BlogsCard = ({ blogs }) => {
  return (
    <div
      class="card shadow border-0 p-3"
      style={{ width: "18rem", margin: "0 20px" }}
    >
      <div className="d-flex ">
        <div>
          <img
            style={{ height: "50px", marginRight: "30px" }}
            src={blogs.img}
            alt=""
          />
        </div>
        <div>
          <h5 class="card-title">{blogs.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">12 May, 2021</h6>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptatem reiciendis officiis mollitia quaerat neque facilis nobis
          sit vero exercitationem.
        </p>
      </div>
    </div>
  );
};

export default BlogsCard;
