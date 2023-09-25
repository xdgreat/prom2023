import Footer from "../components/Footer";
import TicketForm from "../components/TicketForm";

export default function Checkout() {
  return (
    <>
      <div className="px-4 py-2 mt-12">
        <TicketForm />
      </div>
      <Footer />
    </>
  );
}
