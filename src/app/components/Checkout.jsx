export default function Checkout({ checkoutDetails }) {
  const { firstName, phoneNumber, email } = checkoutDetails;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto justify-center border-2 md:p-8 border-accent p-4 rounded-lg">
      <h4 className="text-xl font-bold mb-4 md:text-2xl md:mb-8 md:mt-4">
        Hi <span className="border-b-2 border-accent">{firstName}!</span>{" "}
        Confirm Your Purchase
      </h4>
      <p className="text-white/80 mb-4 md:text-lg">
        To complete your purchase, you can choose one of the following payment
        methods:
      </p>
      <div className="text-white/80">
        <p className="my-2">
          1. Send your payment via M-Paisa to the following number:{" "}
          <span className="font-semibold border-b-2 text-white/90 border-accent">
            2430575
          </span>
          .
        </p>
        <p className="my-2">
          2. Send your payment via MyCash to the following number:{" "}
          <span className="font-semibold text-white/90 border-b-2 border-accent">
            7585585
          </span>
          .
        </p>
      </div>
      <p className="my-2 text-white/80 md:text-lg md:my-4">
        We will be expecting a payment from the number{" "}
        <span className="font-semibold text-white/90">{phoneNumber}</span>.
      </p>
      <p className="text-white/80">
        You will receive a confirmation SMS at{" "}
        <span className="font-semibold text-white/90">{phoneNumber}</span>{" "}
        within 12 hours if your purchase is successful. If you have any
        questions or need assistance, please contact us at{" "}
        <span className="font-semibold my-2 block text-white/90 border-b-2 border-accent w-fit">
          <a href="https://instagram.com/fr3sh.budusy">@fr3sh.budusy</a>
        </span>
      </p>
    </div>
  );
}
