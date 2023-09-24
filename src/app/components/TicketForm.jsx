"use client";
import { useState } from "react";
import Checkout from "./Checkout";
import Link from "next/link";

export default function TicketForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    extraInformation: "",
    ticketType: "standard",
    orderNumber: 0,
    status: "pending",
    date: new Date(),
  });
  const [error, setError] = useState("");
  const [hasPurchased, setHasPurchased] = useState(false);
  const [agreeToTOS, setAgreeToTOS] = useState(false);

  const currentDate = new Date();
  const october15thDate = new Date("2023-10-15");

  const standardTicketPrice = currentDate <= october15thDate ? 50 : 65;
  const plusOneTicketPrice = currentDate <= october15thDate ? 90 : 115;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreeToTOSChange = (e) => {
    setAgreeToTOS(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Disable the purchase button
    const purchaseButton = e.target;
    purchaseButton.setAttribute("disabled", true);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      purchaseButton.removeAttribute("disabled"); // Remove the disabled attribute
      return;
    }

    const dobDate = new Date(formData.dob);
    const age = currentDate.getFullYear() - dobDate.getFullYear();

    if (age < 18) {
      setError("You must be 18 years or older to purchase a ticket.");
      purchaseButton.removeAttribute("disabled"); // Remove the disabled attribute
      return;
    }

    if (!agreeToTOS) {
      setError("You must agree to the Terms and Conditions.");
      purchaseButton.removeAttribute("disabled"); // Remove the disabled attribute
      return;
    }

    for (const key in formData) {
      if (key !== "extraInformation" && formData[key] === "") {
        setError("Please fill in all required fields.");
        purchaseButton.removeAttribute("disabled"); // Remove the disabled attribute
        return;
      }
    }

    console.log(formData);

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        data.orderNumber ? setHasPurchased(true) : data;
      })
      .catch((error) => {
        console.log(error);
      });

    setError("");

    // Re-enable the purchase button after a delay (2 seconds)
    setTimeout(() => {
      purchaseButton.removeAttribute("disabled");
    }, 2000);
  };

  return (
    <>
      {!hasPurchased ? (
        <div className="grid grid-cols-2 mx-auto gap-4 max-w-2xl border-2 border-accent px-8 py-8 justify-center rounded-xl shadow-lg items-center">
          <h4 className="text-2xl border-accent md:text-3xl border-b-2 w-fit mx-auto text-center col-span-2">
            Purchase a Ticket!
          </h4>
          <p className="col-span-2 mb-8 text-sm text-white/90 md:text-base text-center">
            Include extra info if needed, such as an alternative name or
            additional details.
          </p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-md px-2 py-1 bg-white/10 border-2 border-secondary lg:text-lg rounded-md focus-within:border-white/60 outline-none col-span-1"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-md px-2 py-1 bg-white/10 lg:text-lg border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-1"
            placeholder="Last Name"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={{ appearance: "textfield" }}
            inputMode="numeric"
            className="text-lg px-2 py-1 min-h-[2.5rem] lg:text-lg bg-white/10 border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-2"
            placeholder="dd/mm/yyyy"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-md px-2 py-1 bg-white/10 lg:text-lg border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-1"
            placeholder="Email"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="text-md px-2 py-1 bg-white/10 lg:text-lg border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-1"
            placeholder="Phone Number"
          />
          <textarea
            name="extraInformation"
            value={formData.extraInformation}
            onChange={handleChange}
            className="text-md px-2 py-1 bg-white/10 lg:text-lg border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-2"
            placeholder="Extra Information (Optional)"
          />
          <select
            name="ticketType"
            value={formData.ticketType}
            className="text-md px-2 py-2 bg-white/10 text-white/80 lg:text-lg border-2 border-secondary rounded-md focus-within:border-white/60 outline-none col-span-2"
            onChange={handleChange}
            style={{
              backgroundColor: "var(--tw-bg-secondary)",
              color: "white",
              fontFamily: "sans-serif",
            }}>
            <option
              value="standard"
              className="bg-secondary font-serif lg:text-lg text-white/80">
              Standard Ticket - ${standardTicketPrice}
            </option>
            <option
              value="plusOne"
              className="bg-secondary font-serif lg:text-lg text-white/80">
              Plus One Ticket - ${plusOneTicketPrice}
            </option>
          </select>
          <div className="col-span-2">
            <label className="flex items-center lg:text-lg space-x-2 text-white/90">
              <input
                type="checkbox"
                name="agreeToTOS"
                checked={agreeToTOS}
                onChange={handleAgreeToTOSChange}
                className="text-accent rounded-md lg:text-lg focus:ring-accent"
                required
              />
              <span>
                I agree to the{" "}
                <Link
                  href="/terms-of-service"
                  className="border-b-2 border-accent">
                  Terms and Conditions
                </Link>
                .
              </span>
            </label>
          </div>
          <p className="col-span-2 text-red-600">{error}</p>
          <button
            type="submit"
            className="col-span-2 px-4 py-2 bg-accent/80 lg:text-lg rounded-md"
            onClick={handleSubmit}>
            Purchase
          </button>
        </div>
      ) : (
        <Checkout checkoutDetails={formData} />
      )}
    </>
  );
}
