import React from "react";
import "./AppointmentDataTable.css";

const AppointmenthataTable = ({ appointments }) => {
  console.log(appointments);
  return (
    <table className=" table table-borderless shadow mt-5">
      <div className="p-5 w-100">
        <thead>
          <tr>
            <th className="text-secondary text-left thStyle" scope="col">
              Sr. No.
            </th>
            <th className="text-secondary thStyle " scope="col">
              Name
            </th>
            <th className="text-secondary thStyle" scope="col">
              Gender
            </th>
            <th className="text-secondary thStyle" scope="col">
              Age (Year)
            </th>
            <th className="text-secondary thStyle" scope="col">
              Weight (KG)
            </th>
            <th className="text-secondary thStyle" scope="col">
              Phone
            </th>
            <th className="text-secondary thStyle" scope="col">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr>
              <td className="tdStyle">{index + 1}</td>
              <td className="tdStyle pe-5">{appointment.name}</td>
              <td className="tdStyle">{appointment.gender}</td>
              <td className="tdStyle">{appointment.age}</td>
              <td className="tdStyle">{appointment.weight || 0} </td>
              <td className="tdStyle">{appointment.phone}</td>
              <td className="tdStyle">{appointment.email}</td>
            </tr>
          ))}
        </tbody>
      </div>{" "}
    </table>
  );
};

export default AppointmenthataTable;
