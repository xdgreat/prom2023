import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" shadow-md rounded-lg p-8 max-w-md w-full space-y-4">
          <h1 className="text-2xl font-semibold text-center border-b-2 border-accent w-fit mx-auto mb-8">
            Terms and Conditions
          </h1>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Ticket Sales and Entry:
            </li>
            <p className="text-sm text-white/90">
              All ticket sales are final, and no refunds will be issued. Entry
              to the event is only permitted with a valid ticket. The event
              organizers reserve the right to refuse entry to anyone for any
              reason. Attendees must be of legal drinking age and will be
              required to present valid ID upon entry.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Age Restrictions:
            </li>
            <p className="text-sm text-white/90">
              Attendees must be of legal drinking age (if alcohol is served) and
              must present valid ID upon request.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Behavior and Conduct:
            </li>
            <p className="text-sm text-white/90">
              All attendees are expected to conduct themselves in a respectful
              and responsible manner. Disruptive or inappropriate behavior will
              not be tolerated, and attendees may be asked to leave the event
              premises. Attendees are responsible for any damage caused to the
              venue or harm to others.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Liability:
            </li>
            <p className="text-sm text-white/90">
              The event organizers and venue are not responsible for any loss,
              injury, or damage to personal property. Attendees are responsible
              for their belongings and actions during the event.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Alcohol and Substance Use:
            </li>
            <p className="text-sm text-white/90">
              The consumption of alcohol and illegal substances is strictly
              prohibited for minors. Excessive or irresponsible alcohol
              consumption is discouraged. The event organizers reserve the right
              to refuse service. IDs will be checked at the entrance.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Cancellation and Changes:
            </li>
            <p className="text-sm text-white/90">
              The event organizers reserve the right to cancel or reschedule the
              event for any reason. In the event of cancellation, ticket refunds
              may or may not be issued. Changes to the event schedule may occur,
              and attendees will be notified of any significant changes.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Ticket Prices:
            </li>
            <p className="text-sm text-white/90">
              Ticket prices are fixed and non-negotiable. Any attempts to change
              or negotiate ticket prices will not be accepted.
            </p>
          </div>
          <div className="prose">
            <li className="text-base my-4 border-b-2 border-accent w-fit ">
              Association Disclaimer:
            </li>
            <p className="text-sm text-white/90">
              This website and the organization hosting the prom event are not
              associated or affiliated with MGM or Mahatma Gandhi Memorial
              School and are not related to it whatsoever. References to
              &quot;MGM&quot; are related to the students who happen to be
              schooling in MGM.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
