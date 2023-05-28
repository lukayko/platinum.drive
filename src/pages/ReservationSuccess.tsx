import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import MercG from "../assets/others/MercG.jpg";

const ReservationSuccess = () => {
  const location = useLocation();

  // Date Formatting
  const parsedDate = new Date(location.state[0].daterange.startDate);
  const formattedDate = format(parsedDate, "dd MMM yyyy");

  return (
    <div className="mt-24 lg:mt-32 mb-16 w-[90%] mx-auto bg-tertiary text-white rounded-xl shadow-xl flex flex-row">
      {/* Left Side - text s potvrdením*/}
      <div className="w-full h-auto p-12 flex flex-col gap-4 test-base md:text-lg md:w-2/3">
        <h1 className="text-2xl font-bold pb-4 md:pb-8 md:text-4xl">
          Dear{" "}
          <span className="text-secondary">{location.state[0].firstname}</span>,
        </h1>
        <p>
          Congratulations on your successful car rental reservation with our
          luxurious car rental service! We are thrilled to inform you that your
          order has been confirmed.
        </p>
        <h2 className="font-bold text-lg text-secondary">
          Reservation Details:
        </h2>
        <ul>
          <li>
            <span className="font-bold">Car Type:</span>{" "}
            {`${location.state[1].brand + " " + location.state[1].model}`}
          </li>
          <li>
            <span className="font-bold">Pick-up Date:</span>{" "}
            {`${formattedDate}`}
          </li>
        </ul>
        <h3 className="font-bold text-lg text-secondary">
          Contact Information:
        </h3>
        <ul>
          <li>
            <span className="font-bold">Email: </span>
            {`${location.state[0].email}`}
          </li>
          <li>
            <span className="font-bold">Phone Number: </span>
            {`${location.state[0].phone}`}
          </li>
        </ul>
        <p>
          Should you have any further inquiries or require any assistance,
          please do not hesitate to reach out to our dedicated customer support
          team. We are available around the clock to provide you with the best
          service possible.
        </p>
        <p>
          We genuinely appreciate your choice to trust us with your car rental
          needs and look forward to serving you. Enjoy your journey in style and
          luxury!
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

export default ReservationSuccess;
