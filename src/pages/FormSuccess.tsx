import { useLocation } from "react-router-dom";
import MercG from "../assets/others/MercG.jpg";

const FormSuccess = () => {
  const location = useLocation();

  return (
    <div className="mt-32 mb-16 w-[90%] mx-auto bg-tertiary text-white rounded-xl shadow-xl flex flex-row">
      <div className="w-full h-auto p-12 flex flex-col gap-4 test-base md:text-lg md:w-2/3">
        <h1 className="text-2xl font-bold pb-4 md:pb-8 md:text-4xl">
          Dear{" "}
          <span className="text-secondary">{location.state.firstname}</span>,
          Thank you for contacting us!
        </h1>
        <p>
          We have received your email and we will respond to you as soon as
          possible. You can expect to hear back from us either through your
          phone number{" "}
          <span className="font-semibold">{location.state.phone}</span> or your
          email <span className="font-semibold">{location.state.email}</span>.
        </p>
        <p>
          In the meantime, we invite you to follow us on our social media pages
          to stay up-to-date with our latest news and updates. Alternatively, if
          you're in the area, we would be delighted to welcome you to our HQ and
          answer any questions you might have in person.
        </p>

        <p>
          Thank you for your interest in our business. We look forward to
          speaking with you soon!
        </p>

        <p>
          Best regards,&nbsp;
          <span className="font-['Bruno_Ace']">
            Team platinum<span className="text-secondary">.drive</span>
          </span>
        </p>
      </div>
      <div className="hidden w-1/3 h-auto rounded-xl md:block">
        <img
          src={MercG}
          className="w-full h-full object-cover rounded-r-xl opacity-60"
        />
      </div>
    </div>
  );
};

export default FormSuccess;
