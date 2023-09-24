"use client";
import React, { useState } from "react";
import GuestPending from "./GuestPending";

export default function LoginPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        data.message ? setError(data.message) : setIsLogged(true);
      })
      .catch((error) => {
        console.error(error);
        setError("Login failed. Please check your username and password.");
      });
  };

  return (
    <>
      {!isLogged ? (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <form
            className="border border-accent p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center mb-4 border-b-2 border-accent w-fit mx-auto">
              Login
            </h2>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border bg-white/10 border-secondary rounded-md outline-none"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border bg-white/10 border-secondary rounded-md outline-none"
                placeholder="Password"
                required
              />
            </div>
            <p className="text-red-600 text-sm my-4">{error}</p>
            <div className="text-center">
              <button
                type="submit"
                className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark">
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <GuestPending />
      )}
    </>
  );
}
