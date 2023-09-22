import Link from "next/link";
import EventCards from "./components/EventCards";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <>
      <section className="text-center mt-4">
        <div className=" px-4 py-2  flex items-center justify-center flex-col">
          <h1 className="text-4xl my-8 ">
            Welcome to the class of '23
            <span className=" text-accent"> Prom Night</span>
          </h1>
          <p>
            Celebrate your final year in style with an unforgettable night of
            fun and nostalgia.
          </p>
          <div className="my-4 flex flex-row gap-6">
            <Link
              href={"/checkout"}
              className="px-4 py-2 bg-accent w-fit rounded-lg">
              Get Your Tickets
            </Link>
            <Link
              href={"/"}
              className="px-4 py-2 bg-secondary w-fit rounded-lg">
              More info
            </Link>
          </div>
        </div>
        <img
          src="/svg/partyv2.svg"
          className="w-[60vw] max-w-lg mx-auto mt-8"
        />
      </section>
      <section className="mt-12">
        <h2 className="text-3xl text-center border-b-2 my-8 border-accent w-fit mx-auto ">
          Event Details
        </h2>

        <div className="px-4 py-2">
          <p className="text-center text-md">
            This 18+ event welcomes
            <span className="border-b-2 mx-1 border-accent w-fit">
              {" "}
              MGM students{" "}
            </span>
            and alumni. Enjoy unlimited food and drinks, exciting activities,
            and a professional photographer to capture your moments.
          </p>
          <div className="flex flex-row">
            <EventCards />
          </div>
        </div>
      </section>
      <section>
        <h4 className="text-center my-4 mt-12 text-2xl text-white/90">
          Countdown to{" "}
          <span className="border-b-2 border-accent">Prom Night</span>
        </h4>
        <Countdown />
      </section>
    </>
  );
}
