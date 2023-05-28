import IGIcon from "../assets/icons/instagram.png";
import FBIcon from "../assets/icons/facebook.png";
import birdIcon from "../assets/icons/twitter.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

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
      interest: "",
      message: "",
      tos: "",
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
      interest: Yup.string()
        .oneOf(["individual-offer", "transport", "chauffeur", "not-specified"])
        .required("Please, Choose An Option"),
      message: Yup.string()
        .min(2, "Please, Enter A Longer Message")
        .max(150, "Please, Enter A Shorter Message")
        .required("Please, Enter A Message"),
      tos: Yup.array().required("Please, Tick The Box"),
    }),
    onSubmit: (values) => {
      navigate("/message-success", {
        state: values,
      });
    },
  });

  //console.log(formik.values);

  return (
    <div className="mt-24 mb-16 mx-auto w-[90%] flex flex-col justify-between md:mt-32 lg:flex-row">
      {/*1st div - left side */}
      <div className=" bg-tertiary w-full mx-auto h-auto text-white p-12 rounded-xl shadow-lg md:w-2/3 lg:w-[45%] lg:mx-0">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Get In Touch
        </h1>
        <div>
          <h2 className="text-lg font-bold mt-4 md:text-xl lg:mt-8 lg:mb-1">
            Visit Us
          </h2>
          <p>Come say hello and enjoy cup of coffee at our HQ.</p>
          <p className="font-bold">
            <a
              href="https://goo.gl/maps/HkzeNJasnUeHCLy18?coh=178572&entry=tt"
              className="hover:text-secondary ease-in-out duration-500"
            >
              Hradná ulica 74/A9, 842 31 Bratislava
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-4 md:text-xl lg:mt-8 lg:mb-1">
            Chat With Us
          </h2>
          <p>Our team is here to help.</p>
          <p className="font-bold ">
            <a
              href="mailto: hello@platinumdrive.com"
              className="hover:text-secondary ease-in-out duration-500"
            >
              hello@platinumdrive.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-4 md:text-xl lg:mt-8 lg:mb-1">
            Call Us
          </h2>
          <p>Monday - Friday - 9am to 5pm </p>
          <p className="font-bold hover:text-secondary ease-in-out duration-500">
            <a href="tel: +421123456789">+421 123 456 789</a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-4 md:text-xl lg:mt-8 lg:mb-1">
            Social Media
          </h2>
          <div className="flex flex-row gap-6">
            <a
              href="https://www.facebook.com/"
              className="p-2 hover:bg-white rounded-lg ease-in-out duration-500"
            >
              <img src={FBIcon} className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="p-2 hover:bg-white rounded-lg ease-in-out duration-500"
            >
              <img src={IGIcon} className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/"
              className="p-2 hover:bg-white rounded-lg ease-in-out duration-500"
            >
              <img src={birdIcon} className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      {/*2nd div - right side - form */}
      <div className="w-full mt-8 mx-auto md:w-2/3 lg:w-[45%] lg:mt-0 lg:mx-0">
        <h1 className="text-2xl font-bold pb-4 md:text-3xl lg:hidden">
          Write Us A Message
        </h1>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="firstname">
                First Name<span className="text-red-800">*</span>
              </label>
              <input
                className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
                type="text"
                name="firstname"
                placeholder="Enter Your First Name..."
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
                name="lastname"
                placeholder="Enter Your Last Name..."
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
          {/* email */}
          <label htmlFor="email" className="mt-4">
            Email<span className="text-red-800">*</span>
          </label>
          <input
            className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-sm text-red-800">{formik.errors.email}</div>
          ) : (
            ""
          )}
          {/* phone */}
          <label htmlFor="phone" className="mt-4">
            Phone Number<span className="text-red-800">*</span>
          </label>
          <input
            className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number..."
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="text-sm text-red-800">{formik.errors.phone}</div>
          ) : (
            ""
          )}
          {/* interest select */}
          <label htmlFor="interest" className="mt-4">
            I'm Interested In...<span className="text-red-800">*</span>
          </label>
          <select
            className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
            value={formik.values.interest}
            onChange={formik.handleChange}
            name="interest"
          >
            <option value="">Select...</option>
            <option value="individual-offer">Individual Rental Offer</option>
            <option value="transport">Transportation Services</option>
            <option value="chauffeur">Chauffeur Services</option>
            <option value="not-specified">Other</option>
          </select>
          {formik.errors.interest && formik.touched.interest ? (
            <div className="text-sm text-red-800">{formik.errors.interest}</div>
          ) : (
            ""
          )}
          {/* text field */}
          <label htmlFor="message" className="mt-4">
            Message<span className="text-red-800">*</span>
          </label>
          <textarea
            className="text-sm mt-1 p-2 border-2 border-gray-300 rounded-md focus:border-secondary focus:ring-secondary"
            name="message"
            placeholder="Tell Us What We Can Help You With..."
            rows={6}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.message && formik.touched.message ? (
            <div className="text-sm text-red-800">{formik.errors.message}</div>
          ) : (
            ""
          )}
          {/* checkbox */}
          <div className="mt-4">
            <input
              className="border-2 border-gray-300 text-secondary focus:border-secondary focus:ring-secondary"
              type="checkbox"
              name="tos"
              value="checked"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="tos" className="pl-2">
              I agree to be contacted whether by email or phone. I understand
              and agree to the Privacy Policy.
              <span className="text-red-800">*</span>
            </label>
            {formik.errors.tos && formik.touched.tos ? (
              <div className="text-sm text-red-800">{formik.errors.tos}</div>
            ) : (
              ""
            )}
          </div>
          {/* button */}
          <div>
            <button
              className="bg-secondary text-white rounded-lg mt-8 p-3 w-full shadow-lg ease-in-out duration-500 font-bold"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
