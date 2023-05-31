import fleet from "../assets/others/car-fleet.jpg";
import chauffeur from "../assets/others/chauffeur-services.jpg";
import transport from "../assets/others/transport-services.jpg";
import other from "../assets/others/other-services.jpg";

type CardTypes = {
  img: any;
  text: string;
  heading: string;
  btnText: string;
  btnPath: string;
};

export const servicesData: Array<CardTypes> = [
  {
    img: fleet,
    heading: "Car Rental",
    text: `Experience the pinnacle of luxury and convenience with our premier
      car rental service in Bratislava. Discover the city and beyond in
      style, as our meticulously maintained fleet of vehicles awaits
      your arrival. From sleek sedans to spacious SUVs, we offer a range
      of options to suit your needs. With flexible rental periods and a
      commitment to exceptional customer service, we make your journey
      seamless and unforgettable. Whether it's a day of exploration or a
      weekend getaway, trust us to provide you with a driving experience
      that combines elegance, comfort, and convenience. Choose our car
      rental service and elevate your travel to new heights.`,
    btnText: "See Our Fleet",
    btnPath: "/our-fleet",
  },
  {
    img: chauffeur,
    heading: "Chauffeur Services",
    text: `Indulge in the epitome of luxury and sophistication with our
      premier chauffeur services. Sit back, relax, and let our
      professional drivers take the wheel as you experience the
      ultimate in comfort and convenience. Whether you're attending a
      special event, heading to a business meeting, or exploring the
      city in style, our chauffeurs are committed to providing you
      with a first-class experience. Impeccably dressed and
      knowledgeable about the area, they ensure a smooth and seamless
      journey from start to finish. With attention to detail and a
      focus on personalized service, our chauffeur services redefine
      the art of transportation, leaving you free to savor every
      moment.`,
    btnText: "Book A Chauffeur",
    btnPath: "/contact-us",
  },
  {
    img: transport,
    heading: "Transportation Services",
    text: `Reliable and secure, our transportation services redefine the
      way you move your vehicle from one country to another. With our
      expertise and attention to detail, we ensure a smooth and
      hassle-free process for transporting your car. Our dedicated
      team of professionals handles every aspect, from logistics and
      paperwork to secure loading and unloading. With a global network
      of trusted partners, we provide seamless door-to-door service,
      ensuring your vehicle arrives safely and on time. Whether you're
      relocating, selling a vehicle, or simply need to move your car
      across borders, trust our transportation services to deliver
      your prized possession with the utmost care and professionalism.`,
    btnText: "Book A Vehicle Transport",
    btnPath: "/contact-us",
  },
  {
    img: other,
    heading: "Didn't Find What You Needed?",
    text: `In our pursuit of customer satisfaction, we go above and beyond
      to exceed expectations and embrace the extraordinary. Our
      commitment to service knows no bounds as we strive to create
      memorable experiences for our valued customers. We understand
      that every journey is unique, and we are not afraid to think
      outside the box to make your dreams a reality. Whether it's
      arranging a personalized itinerary, organizing a surprise for a
      special occasion, or catering to specific requests, we embrace
      the unconventional to ensure your utmost satisfaction. With our
      unwavering dedication and willingness to go the extra mile,
      trust us to create exceptional moments and leave you with
      memories that will last a lifetime.`,
    btnText: "Send Us Your Specific Needs",
    btnPath: "/contact-us",
  },
];
