export default function () {
  const eventDetails = [
    {
      title: "Date",
      value: "November 18th, 2023",
      imageSrc: "/svg/calendar.svg",
    },
    {
      title: "Time",
      value: "7:00 PM - 11:00 AM",
      imageSrc: "/svg/clock.svg",
    },
    {
      title: "Age Limit",
      value: "Only guests over 18 will be allowed in the venue.",
      imageSrc: "/svg/child.svg",
    },
    {
      title: "Guests",
      value:
        "MGM students and alumni, outsiders welcome with a companion ticket.",
      imageSrc: "/svg/person.svg",
    },
    {
      title: "Security",
      value: "ID checks will be conducted at the venue entrance.",
      imageSrc: "/svg/security.svg",
    },
    {
      title: "Venue",
      value: "Albert Park Hall, Suva",
      imageSrc: "/svg/location.svg",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center max-w-5xl mx-auto items-center mt-8 md:mt-12 ">
      {eventDetails.map((el, key) => {
        return (
          <div
            key={key}
            className="border max-w-xs flex flex-col justify-evenly items-center aspect-square border-accent rounded-md shadow-lg w-[60vw] text-center px-4 py-2">
            <img
              src={el.imageSrc}
              alt={el.title}
              className=" w-16 rounded-full p-2 md:w-20"
            />
            <h4 className="text-xl font-semibold md:text-2xl">{el.title}</h4>
            <p className=" text-white/80 md:text-lg">{el.value}</p>
          </div>
        );
      })}
    </div>
  );
}
