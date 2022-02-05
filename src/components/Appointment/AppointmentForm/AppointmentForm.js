import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "600px",
    border: "none",
    boxShadow: "5px 10px 50px grey",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment created successfully.");
        }
      });

    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand mb-3 text-center">{appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small> On {date.toDateString(date)}</small>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="time"
            {...register("time", { required: true })}
            className="form-control mb-2 shadow-sm   "
            placeholder="Select Time"
          />

          {errors.time && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            className="form-control mb-2 shadow-sm   "
            placeholder="Your Name"
            {...register("name", { required: true })}
          />

          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            type="tel"
            className="form-control mb-2 shadow-sm   "
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />

          {errors.phone && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            type="email"
            className="form-control mb-2 shadow-sm   "
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
          <div className="form-group row">
            <div>
              <select
                className="form-control mb-2 shadow-sm"
                {...register("gender")}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <input
            type="date"
            className="form-control mb-2 shadow-sm   "
            {...register("date", { required: true })}
          />

          {errors.date && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            type="number"
            className="form-control mb-2 shadow-sm   "
            placeholder="Your Age"
            {...register("age", { required: true })}
          />

          {errors.age && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            type="number"
            className="form-control mb-2 shadow-sm   "
            placeholder="Your weight"
            {...register("weight", { required: true })}
          />

          {errors.weight && (
            <span className="text-danger">This field is required</span>
          )}

          <input className="form-control btn-brand mb-2 " type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
