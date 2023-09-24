import { getAcceptedGuests } from "./orderNumberData";

export default async function orderNumber(context) {
  //   const guest = await getAcceptedGuests(context.params.orderNumber);
  const guest = undefined;
  try {
    const guests = await fetch("https://prom2023.org/api/accept/guests", {
      method: "POST",
      body: JSON.stringify({ orderNumber: context.params.orderNumber }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
  console.log(context.params.orderNumber);
  if (!guest || !guest[0]) {
    return <h1>Guest Not Found</h1>;
  }

  const {
    firstName,
    lastName,
    dob,
    email,
    phoneNumber,
    extraInformation,
    ticketType,
    orderNumber,
    status,
  } = guest[0];

  return (
    <div className="w-max mx-auto border-accent border-2 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 p-8 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4 border-b-2 border-accent w-fit mx-auto">
        E-Ticket
      </h1>
      <div className="mb-4">
        <p className="text-sm text-white/80">
          Order Number:{" "}
          <span className="text-base text-white">#{orderNumber}</span>
        </p>
        <p className="text-lg py-1">
          <span className="text-sm text-white/80 ">Name: </span>
          {firstName} {lastName}
        </p>
        <p className="text-sm text-white/80 py-1">
          Date of Birth: <span className="text-white text-base">{dob}</span>
        </p>
        <p className="text-sm text-white/80 py-1">
          Email: <span className="text-base text-white">{email}</span>
        </p>
        <p className="text-sm text-white/80 py-1">
          Phone Number:{" "}
          <span className="text-base text-white">{phoneNumber}</span>
        </p>
        <p className="text-sm py-1 text-white/80">
          Ticket Type:{" "}
          <span className="text-base text-white">{ticketType}</span>
        </p>
      </div>
      <div className="mb-8">
        <p className="text-sm text-white/80">
          Additional Information: {extraInformation ? extraInformation : "-"}
        </p>
      </div>
      <p className="text-lg font-semibold border-2 w-fit px-4 py-2 block mx-auto rounded-md border-green-500">
        Status: {status === "accepted" ? "Accepted" : "Pending"}
      </p>
      <p className="text-sm mt-4 text-center text-white/70">
        Thank you for choosing us! Enjoy the prom.
      </p>
    </div>
  );
}
