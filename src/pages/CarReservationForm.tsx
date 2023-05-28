import { differenceInCalendarDays } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Datepicker from "../components/Datepicker";

type RangeType = {
  startDate: Date;
  endDate: Date;
  key: String;
};

const CarReservationForm = () => {
  // hooks
  const location = useLocation();
  const navigate = useNavigate();
  const [range, setRange] = useState<RangeType[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Update Formik Date Values
  useEffect(() => {
    formik.values.daterange.startDate = range[0].startDate;
    formik.values.daterange.endDate = range[0].endDate;
    console.log(formik.values);
  }, [range]);

  // Rent Price Calculation FX
  const getRentPrice = () => {
    const rentSpan = differenceInCalendarDays(
      range[0].endDate,
      range[0].startDate
    );
    const vehiclePrice = Number(location.state.price);
    const addServicesValue =
      formik.values.additionalServices === "yes" ? 150 : 0;

    return rentSpan * (vehiclePrice + addServicesValue);
  };

  const carData = location.state;
  // Phone Number Regex for Yup Validation
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  // Formik Initial Values
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      daterange: {
        startDate: "",
        endDate: "",
      },
      additionalServices: "",
    },
    //Form Validation
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(2, "Please, Use A Longer Name")
        .max(20, "Please, Use A Shorter Name")
        .required("Please, Enter Your First Name"),
      lastname: Yup.string()
        .min(2, "Please, Use A Longer Name")
        .max(20, "Please, Use A Shorter Name")
        .required("Please, Enter Your Last Name"),
      email: Yup.string()
        .email("Please, Enter A Valid Email")
        .required("Please, Enter Your Email"),
      phone: Yup.string()
        .matches(phoneRegExp, "Please, Enter A Valid Phone Number")
        .required("Please, Enter Your Phone Number"),
      additionalServices: Yup.string()
        .oneOf(["yes", "no"])
        .required("Please, Choose An Option"),
    }),
    onSubmit: (values) => {
      navigate("/reservation-success", {
        state: [values, carData],
      });

      // Space for API request to reserve the selected date for that car
    },
  });

  return (
    <div className="mt-24 w-[90%] lg:w-[50%] mx-auto">
      <h1 className="text-xl font-bold text-tertiary mb-8 md:text-3xl lg:text-4xl">
        {`Reservation for ${location.state.brand + " " + location.state.model}`}
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="firstname">
                First Name<span className="text-red-800">*</span>
              </label>
              <input
                className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
                type="text"
                id="firstname"
                placeholder="Enter Your First Name..."
                autoComplete="given-name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <div className="text-sm text-red-800">
                  {formik.errors.firstname}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="lastname">
                Last Name<span className="text-red-800">*</span>
              </label>
              <input
                className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
                type="text"
                id="lastname"
                placeholder="Enter Your Last Name..."
                autoComplete="family-name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <div className="text-sm text-red-800">
                  {formik.errors.lastname}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mt-4">
              Email<span className="text-red-800">*</span>
            </label>
            <input
              className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
              type="email"
              id="email"
              placeholder="Enter Your Email..."
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-sm text-red-800">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mt-4">
              Phone Number<span className="text-red-800">*</span>
            </label>
            <input
              className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
              type="text"
              id="phone"
              placeholder="Enter Your Phone Number..."
              autoComplete="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="text-sm text-red-800">{formik.errors.phone}</div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="calendar">
              Date<span className="text-red-800">*</span>
            </label>
            <Datepicker range={range} setRange={setRange} />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="additionalServices">
              Are You Interested in Our Chauffeur Services?
              <span className="text-red-800">*</span>
            </label>
            <select
              name="additionalServices"
              id="additionalServices"
              value={formik.values.additionalServices}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
            >
              <option value="">Select...</option>
              <option value="no">No, I Don't Need a Chauffeur.</option>
              <option value="yes">
                Yes, I Would Like to Have a Chauffeur. (+150€/day)
              </option>
            </select>
            {formik.errors.additionalServices &&
            formik.touched.additionalServices ? (
              <div className="text-sm text-red-800">
                {formik.errors.additionalServices}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* miesto pre zlavovy kod */}
          <div className="mt-4">
            <h1 className="text-lg font-bold">{`Price: ${getRentPrice()}€`}</h1>
          </div>
          <button
            className="bg-secondary text-white rounded-lg mt-8 p-3 w-full shadow-lg ease-in-out duration-500 font-bold"
            type="submit"
          >
            Send Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarReservationForm;
