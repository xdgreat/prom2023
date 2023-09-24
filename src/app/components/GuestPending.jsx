"use client";

import { useEffect, useState } from "react";

export default function GuestPending() {
  const [guestData, getGuestData] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setInterval(() => {
      fetch("/api/guest", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => getGuestData(data));
    }, 5000);
  }, []);

  const handleAccept = (orderNumber) => {
    fetch(`/api/accept/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderNumber: orderNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const updatedGuestData = guestData.map((guest) =>
            guest.orderNumber === orderNumber
              ? { ...guest, status: "accepted" }
              : guest
          );
          getGuestData(updatedGuestData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (orderNumber) => {
    fetch(`/api/reject/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderNumber: orderNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const updatedGuestData = guestData.map((guest) =>
            guest.orderNumber === orderNumber
              ? { ...guest, status: "rejected" }
              : guest
          );
          getGuestData(updatedGuestData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Filter guest data based on search term
  const filteredGuests = guestData.filter((el) => {
    const fullName = `${el.firstName} ${el.lastName}`.toLowerCase();
    return (
      el.orderNumber.toString().includes(searchTerm) ||
      fullName.includes(searchTerm.toLowerCase())
    );
  });

  // Sort the filteredGuests array based on status
  const sortedGuests = [...filteredGuests].sort((a, b) => {
    if (a.status === "pending" && b.status !== "pending") {
      return -1; // Move pending guests to the top
    } else if (a.status !== "pending" && b.status === "pending") {
      return 1; // Move pending guests to the top
    } else {
      return 0; // Maintain the order for accepted and rejected guests
    }
  });

  return (
    <div className="p-6 flex-col gap-2 flex">
      <h2 className="text-center text-2xl mt-4 mb-8 font-semibold border-b-2 border-accent w-fit mx-auto">
        Pending Guests
      </h2>
      <input
        type="text"
        placeholder="Search by order number or name"
        className="p-2 border-2 border-accent rounded-md bg-secondary mb-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {sortedGuests.map((el, key) => (
        <div
          key={key}
          className={`border-2 p-4 mb-2 rounded-md ${
            el.status === "accepted"
              ? "border-green-500"
              : el.status === "rejected"
              ? "border-red-500"
              : "border-accent"
          }`}>
          <div className="flex justify-between gap-8 items-center">
            <span className="text-sm">
              R.<span className="font-semibold">{el.orderNumber}</span> Name:{" "}
              <span className="font-semibold">
                {el.firstName} {el.lastName}
              </span>
            </span>
            {el.status === "pending" ? (
              selectedGuest === el.orderNumber ? (
                <div className="flex gap-2 flex-col">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleAccept(el.orderNumber)}>
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleReject(el.orderNumber)}>
                    Reject
                  </button>
                </div>
              ) : (
                <button
                  className="bg-accent text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedGuest(el.orderNumber)}>
                  View
                </button>
              )
            ) : (
              <div className="text-lg font-semibold">
                {el.status === "accepted" ? "Accepted" : "Rejected"}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
