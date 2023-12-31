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
        cache: "no-store",
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

  const currentDate = new Date();
  const calculateTotals = () => {
    const totalSales = guestData.reduce((total, guest) => {
      if (guest.status === "accepted") {
        const ticketPrice = calculateTicketPrice(guest);
        total += ticketPrice;
      }
      return total;
    }, 0);

    const totalTicketsSold = guestData.filter(
      (guest) => guest.status === "accepted"
    ).length;

    const totalGuests = guestData.reduce((total, guest) => {
      if (guest.status === "accepted") {
        if (guest.ticketType === "plusOne") {
          total += 2;
        } else if (guest.ticketType === "standard") {
          total += 1;
        }
      }
      return total;
    }, 0);

    return { totalSales, totalTicketsSold, totalGuests };
  };

  const calculateTicketPrice = (guest) => {
    const ticketPrice = guest.ticketType === "plusOne" ? 90 : 50;

    // Check if the date is after October 15th
    const october15th = new Date(currentDate.getFullYear(), 9, 15); // Month is 0-based, so 9 is October
    const isAfterOctober15th = new Date(guest.date) >= october15th;

    // If the date is after October 15th, adjust the ticket price
    return isAfterOctober15th
      ? ticketPrice
      : guest.ticketType === "plusOne"
      ? 55
      : 30;
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

  const { totalSales, totalTicketsSold, totalGuests } = calculateTotals();

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const year = new Date().getFullYear();
    const october15th = new Date(year, 9, 15); // Month is 0-based, so 9 is October
    const isAfterOctober15th = guestData.date >= october15th;

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );

    return (
      <span
        className={`font-semibold text-white/70 text-sm ${
          isAfterOctober15th ? "border-b-2 border-accent" : ""
        }`}
      >
        {formattedDate}
      </span>
    );
  }
  return (
    <>
      <h2 className="text-center text-2xl mt-4 mb-8 font-semibold border-b-2 border-accent w-fit mx-auto">
        Pending Guests
      </h2>
      <input
        type="text"
        placeholder="Search by order number or name"
        className="p-2 border-2 border-accent mx-auto block max-w-2xl w-full rounded-md bg-secondary mb-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mx-auto w-fit">
        <p>Total Sales: ${totalSales}</p>
        <p>Total Tickets Sold: {totalTicketsSold}</p>
        <p>Total Guests: {totalGuests}</p>
      </div>
      <div className="p-6 flex-row flex-wrap gap-4 flex justify-center">
        {sortedGuests.map((el, key) => (
          <div
            key={key}
            className={`border-2 p-4 mb-2 rounded-md w-72 ${
              el.status === "accepted"
                ? "border-green-500"
                : el.status === "rejected"
                ? "border-red-500"
                : "border-accent"
            }`}
          >
            <div className="text-white">
              <div className="font-semibold text-white/70 text-sm">
                Order Number:
              </div>{" "}
              #{el.orderNumber}
            </div>
            <div className="text-white mt-2">
              <div className="font-semibold text-white/70 text-sm {dateClasses}">
                Date:
              </div>{" "}
              {formatDate(el.date)}
            </div>
            <div className="text-white mt-2">
              <div className="font-semibold text-white/70 text-sm">Name:</div>{" "}
              {el.firstName} {el.lastName}
            </div>
            <div className="text-white mt-2">
              <div className="font-semibold text-white/70 text-sm">
                Phone Number:
              </div>{" "}
              {el.phoneNumber}
            </div>
            <div className="text-white mt-2">
              <div className="font-semibold text-white/70 text-sm">
                Ticket Type:
              </div>{" "}
              {el.ticketType}
            </div>
            <div className="text-white mt-2 break-words">
              <div className="font-semibold text-white/70 text-sm">
                Extra Information:
              </div>{" "}
              {el.extraInformation}
            </div>
            <div className="flex justify-center mt-2">
              {el.status === "pending" ? (
                selectedGuest === el.orderNumber ? (
                  <div className="flex gap-2 flex-row my-4">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleAccept(el.orderNumber)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleReject(el.orderNumber)}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-accent text-white px-4 py-2 rounded-md"
                    onClick={() => setSelectedGuest(el.orderNumber)}
                  >
                    View
                  </button>
                )
              ) : (
                <div className="text-lg font-semibold text-white">
                  {el.status === "accepted" ? "Accepted" : "Rejected"}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
