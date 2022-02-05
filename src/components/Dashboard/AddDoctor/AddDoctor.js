import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctor = () => {
  // const [info, setInfo] = useState({});
  // const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  // const handleBlur = (e) => {
  //   const newInfo = { ...info };
  //   newInfo[e.target.name] = e.target.value;
  //   setInfo(newInfo);
  // };

  // const handleFileChange = (e) => {
  //   const newFile = e.target.files[0];
  //   setFile(newFile);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctor added successfully");
          console.log("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Upload successfully");
  };
  console.log(name, email, image);
  return (
    <section className="container-fluid row ps-0">
      <div className="col-md-2 col-sm-4">
        <Sidebar />
      </div>
      <div
        className="col-md-10 p-4  pr-5 col-sm-8"
        style={{ postion: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add a Doctor</h5>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
              // onBlur={handleBlur}
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              onBlur={(e) => setName(e.target.value)}
              // onBlur={handleBlur}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Upload a image
            </label>
            <input
              type="file"
              class="form-control"
              name="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </section>
  );
};

export default AddDoctor;
