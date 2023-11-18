"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2023-12-02T18:00:00");

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-12-02T18:00:00");
    // Define targetDate here

    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array since targetDate is defined inside the effect

  return (
    <div className="px-4">
      <div className="flex text-xl border border-secondary max-w-fit mx-auto rounded-lg px-4 py-2 justify-center items-center text-center">
        <div className=" p-1 rounded-lg lg:text-2xl text-white/60">
          <span className="text-white ">{countdown.days}</span> days
        </div>
        <div className=" p-1 rounded-lg lg:text-2xl text-white/60">
          <span className="text-white">{countdown.hours}</span> hours
        </div>
        <div className=" p-1 rounded-lg lg:text-2xl text-white/60">
          <span className="text-white">{countdown.minutes}</span> minutes
        </div>
        <div className=" p-1 rounded-lg lg:text-2xl text-white/60">
          <span className="text-white">{countdown.seconds}</span> seconds
        </div>
      </div>
    </div>
  );
}
