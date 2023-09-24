import Link from "next/link";
import EventCards from "./components/EventCards";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <>
      <section className="text-center mt-4 lg:flex-row lg:text-start lg:max-w-[80vw] 2xl:max-w-[60vw] md:max-w-[80vw] mx-auto flex flex-col">
        <div className=" px-4 py-2  flex items-center md:items-start justify-center  flex-col">
          <h1 className="text-4xl my-8 lg:text-6xl">
            Welcome to the class of '23{" "}
            <span className=" text-accent">Prom Night</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Celebrate your final year in style with an unforgettable night of
            fun and nostalgia.
          </p>
          <div className="my-4 flex flex-row gap-6 md:gap-4 md:items-start md:justify-start">
            <Link
              href={"/checkout"}
              className="px-4 py-2 bg-accent w-fit rounded-lg lg:text-xl">
              Get Your Tickets
            </Link>
            <Link
              href={"/"}
              className="px-4 py-2 bg-secondary w-fit rounded-lg lg:text-xl">
              Activity Hub
            </Link>
          </div>
        </div>
        <img
          src="/svg/partyv2.svg"
          className="w-[60vw] max-w-lg mx-auto mt-8"
        />
      </section>
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl lg:text-4xl text-center border-b-2 my-8 border-accent w-fit mx-auto ">
          Event Details
        </h2>

        <div className="px-4 py-2">
          <p className="text-center text-base md:text-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            This 18+ event welcomes
            <span className="border-b-2 mx-1 border-accent w-fit">
              {" "}
              MGM students{" "}
            </span>
            and alumni. Enjoy unlimited food and drinks, exciting activities,
            and a professional photographer to capture your moments.
          </p>
          <div>
            <EventCards />
          </div>
        </div>
      </section>
      <section>
        <h4 className="text-center my-4 mt-12 text-2xl text-white/90 md:text-4xl md:mt-16 md:mb-8">
          Countdown to{" "}
          <span className="border-b-2 border-accent ">Prom Night</span>
        </h4>
        <Countdown />
      </section>
    </>
  );
}
