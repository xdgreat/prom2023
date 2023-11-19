import Countdown from "@/app/components/Countdown";

export default async function orderNumber(context) {
  const guest = await fetch("https://prom2023.org/api/accept/e-ticket", {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ orderNumber: context.params.orderNumber }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (!guest || !guest[0]) {
    return <h1>Guest Not Found</h1>;
  }

  console.log("testing" + guest[0].name);

  const { firstName, lastName, orderNumber, status, ticketType } = guest[0];
  let updatedTicketType;
  if (ticketType === "standard") {
    updatedTicketType = "Standard";
  } else {
    updatedTicketType = "Premium";
  }
  return (
    <div className="e-ticket flex justify-between text-center items-center flex-col w-80 aspect-[1/1.5] mx-auto border-accent border-2 relative p-8 shadow-md rounded-lg mt-24">
      <h1 className="text-2xl font-semibold text-center mb-4 border-b-2 border-accent w-fit mx-auto">
        E-Ticket
      </h1>
      <div className="ribbon ribbon-top-left">
        <span className="text-base">{updatedTicketType}</span>
      </div>
      <p className="text-lg font-semibold text-white/70 absolute top-4 right-4">
        #{orderNumber}
      </p>
      <div className="mb-4">
        <p className="text-lg mb-4  border-b-2 border-accent w-fit mx-auto">
          {firstName} {lastName}
        </p>
        <p className="text-lg my-1 text-white/80">Metro Gym Hall</p>
        <p className="text-lg my-1 text-white/80">5th December 2023</p>
        <p className="text-lg my-1 text-white/80">6pm-11pm</p>
        {/* <p className="text-sm text-white/80 py-1">
          Date of Birth: <span className="text-white text-base">{dob}</span>
        </p> */}
        {/* <p className="text-sm text-white/80 py-1">
          Email: <span className="text-base text-white">{email}</span>
        </p> */}
        {/* <p className="text-sm text-white/80 py-1">
          Phone Number:{" "}
          <span className="text-base text-white">{phoneNumber}</span>
        </p> */}
        {/* <p className="text-sm py-1 text-white/80">
          Ticket Type:{" "}
          <span className="text-base text-white">{ticketType}</span>
        </p> */}
      </div>
      {/* <div className="mb-8 text-white/80">
        Additional Information:
        <p className="text-sm text-white">
          {extraInformation ? extraInformation : "-"}
        </p>
      </div> */}
      <p className="text-lg font-semibold border-2 w-fit px-4 py-2 block mx-auto rounded-md border-green-500">
        Status: {status === "accepted" ? "Accepted" : "Pending"}
      </p>
      <p className="text-sm mt-4 text-center text-white/70">
        Thank you for choosing us! Enjoy the prom.
      </p>
    </div>
  );
}
