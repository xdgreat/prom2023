"use client";
import React, { useState } from "react";

export default function TicketForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    extraInformation: "",
    ticketType: "standard",
  });

  const currentDate = new Date();
  const october15thDate = new Date("2023-10-15");

  const standardTicketPrice = currentDate <= october15thDate ? 50 : 65;
  const plusOneTicketPrice = currentDate <= october15thDate ? 90 : 115;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Date of Birth (DOB):
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Extra Information (Optional):
          <textarea
            name="extraInformation"
            value={formData.extraInformation}
            onChange={handleChange}
            className="block"
          />
        </label>
        <label>
          Ticket Type:
          <select
            name="ticketType"
            value={formData.ticketType}
            className="block"
            onChange={handleChange}>
            <option value="standard">
              Standard Ticket - ${standardTicketPrice}
            </option>
            <option value="plusOne">
              Plus One Ticket - ${plusOneTicketPrice}
            </option>
          </select>
        </label>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}
