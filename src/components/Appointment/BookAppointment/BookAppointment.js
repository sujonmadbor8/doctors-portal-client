import React from "react";
import BookingCard from "./../BookingCard/BookingCard";

const bookingData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];

const BookAppointment = ({ date }) => {
  return (
    <div className="container">
      <h2 className="text-center text-brand mb-5">
        Available appointment on {date.toDateString()}
      </h2>
      <div className="row ">
        {bookingData.map((booking) => (
          <BookingCard booking={booking} key={booking.id} date={date} />
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
