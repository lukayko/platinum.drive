import {
  limo1IMG,
  limo1IMG2,
  limo1IMG3,
  limo2IMG,
  limo2IMG2,
  limo2IMG3,
  limo3IMG,
  limo3IMG2,
  limo3IMG3,
  suv1IMG,
  suv1IMG2,
  suv1IMG3,
  suv2IMG,
  suv2IMG2,
  suv2IMG3,
  suv3IMG,
  suv3IMG2,
  suv3IMG3,
  spec1IMG,
  spec1IMG2,
  spec1IMG3,
  spec2IMG,
  spec2IMG2,
  spec2IMG3,
  spec3IMG,
  spec3IMG2,
  spec3IMG3,
} from "../assets";

type vehicleDataTypes = {
  idx: number;
  class: string;
  brand: string;
  model: string;
  seats: string;
  kw: string;
  space: string;
  price: string;
  picture: string;
  album: Array<{ photo: string }>;
  description: string;
};

type catDescriptionTypes = {
  class: string;
  heading: string;
  p: string;
};

export const vehicleData: Array<vehicleDataTypes> = [
  {
    idx: 1,
    class: "limos",
    brand: "Mercedes-Benz",
    model: "S 400d 4MATIC",
    seats: "4",
    kw: "243kW",
    space: "2",
    price: "300",
    picture: limo1IMG,
    album: [
      {
        photo: limo1IMG,
      },
      {
        photo: limo1IMG2,
      },
      {
        photo: limo1IMG3,
      },
    ],
    description:
      "The Mercedes S-Class 400d is the embodiment of luxury and performance. Equipped with a smooth and powerful diesel engine, it delivers effortless acceleration and exceptional fuel efficiency, making it a joy to drive both on long journeys and in city traffic. Inside, the cabin offers a spacious and comfortable environment, with premium materials and advanced technology that provide a truly immersive driving experience. The exterior design is sleek and elegant, with the distinctive Mercedes-Benz styling that conveys sophistication and prestige. With its combination of performance, efficiency, and luxury, the S-Class 400d sets a new standard for the modern executive sedan.",
  },
  {
    idx: 2,
    class: "limos",
    brand: "Mercedes-Maybach",
    model: "S 680 Long",
    seats: "4",
    kw: "450kW",
    space: "2",
    price: "700",
    picture: limo2IMG,
    album: [
      {
        photo: limo2IMG,
      },
      {
        photo: limo2IMG2,
      },
      {
        photo: limo2IMG3,
      },
    ],
    description:
      "The Mercedes S-Class Maybach is the ultimate expression of luxury and refinement. With its extended wheelbase, it offers unparalleled spaciousness and comfort, making it the perfect vehicle for executive travel or simply for indulging in the finer things in life. The Maybach edition boasts exquisite attention to detail, with sumptuous leather upholstery and premium materials throughout the cabin. Cutting-edge technology and advanced safety features ensure a smooth and secure ride, while a powerful engine provides impressive performance. From the sleek exterior design to the opulent interior, the S-Class Maybach is a true masterpiece of automotive engineering and design.",
  },
  {
    idx: 3,
    class: "limos",
    brand: "BMW",
    model: "i7 xDrive60",
    seats: "5",
    kw: "400kW",
    space: "2",
    price: "550",
    picture: limo3IMG,
    album: [
      {
        photo: limo3IMG,
      },
      {
        photo: limo3IMG2,
      },
      {
        photo: limo3IMG3,
      },
    ],
    description:
      "The BMW i7 xDrive60 is the ultimate luxury electric vehicle, combining stunning performance with eco-friendly driving. Equipped with a powerful electric motor and advanced battery technology, it provides impressive acceleration and a long driving range. The xDrive all-wheel drive system ensures optimal traction and handling in all conditions, while the advanced suspension system offers a smooth and comfortable ride. Inside, the cabin is designed to provide a spacious and luxurious environment, with cutting-edge technology and premium materials throughout. The exterior design is sleek and dynamic, with a distinctive BMW style that sets it apart from other luxury sedans. With its combination of performance, eco-friendliness, and luxury, the i7 xDrive60 is the ultimate electric driving experience.",
  },
  {
    idx: 4,
    class: "suvs",
    brand: "BMW",
    model: "X7 xDrive40d",
    seats: "7",
    kw: "280kW",
    space: "4",
    price: "430",
    picture: suv1IMG,
    album: [
      {
        photo: suv1IMG,
      },
      {
        photo: suv1IMG2,
      },
      {
        photo: suv1IMG3,
      },
    ],
    description:
      "The BMW X7 xDrive40d is the ultimate luxury SUV, combining spaciousness, versatility, and impressive performance. Equipped with a powerful diesel engine and the xDrive all-wheel drive system, it delivers a smooth and comfortable ride, while also offering excellent handling and traction in all weather conditions. The cabin is designed to provide a spacious and luxurious environment, with premium materials and cutting-edge technology throughout. With seating for up to seven passengers, the X7 xDrive40d is the perfect vehicle for family outings or executive travel. The exterior design is sleek and bold, with a distinctive BMW style that conveys both elegance and sportiness. With its combination of performance, versatility, and luxury, the X7 xDrive40d sets a new standard for the modern luxury SUV.",
  },
  {
    idx: 5,
    class: "suvs",
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    seats: "5",
    kw: "471kW",
    space: "3",
    price: "460",
    picture: suv2IMG,
    album: [
      {
        photo: suv2IMG,
      },
      {
        photo: suv2IMG2,
      },
      {
        photo: suv2IMG3,
      },
    ],
    description:
      "The Porsche Cayenne Turbo GT is the ultimate expression of high-performance luxury SUVs. Equipped with a powerful turbocharged engine and advanced suspension system, it delivers exceptional acceleration, handling, and agility, making it a thrill to drive both on and off the road. The interior is designed to provide a comfortable and luxurious environment, with premium materials and advanced technology that enhance the driving experience. With its sleek and sporty exterior design, the Cayenne Turbo GT commands attention on the road, while also delivering impressive practicality and versatility. From the racetrack to the city streets, the Cayenne Turbo GT is the ultimate combination of performance, luxury, and versatility.",
  },
  {
    idx: 6,
    class: "suvs",
    brand: "Mercedes-AMG",
    model: "GLE 53 Coupe",
    seats: "5",
    kw: "450kW",
    space: "2",
    price: "580",
    picture: suv3IMG,
    album: [
      {
        photo: suv3IMG,
      },
      {
        photo: suv3IMG2,
      },
      {
        photo: suv3IMG3,
      },
    ],
    description:
      "The Mercedes Benz GLE 53 AMG Coupe is a stunning combination of luxury and performance. Equipped with a powerful turbocharged engine and AMG-tuned suspension, it delivers exceptional acceleration, handling, and agility, making it a thrill to drive on any road. The interior is designed to provide a comfortable and luxurious environment, with premium materials and advanced technology that enhance the driving experience. The sleek and sporty exterior design of the GLE 53 AMG Coupe is truly eye-catching, with distinctive AMG styling that sets it apart from other luxury SUVs. From the racetrack to the city streets, the GLE 53 AMG Coupe is the perfect vehicle for those who demand the ultimate driving experience.",
  },
  {
    idx: 7,
    class: "specials",
    brand: "Bentley",
    model: "Continental GTC Mansory",
    seats: "4",
    kw: "404kW",
    space: "2",
    price: "1400",
    picture: spec1IMG,
    album: [
      {
        photo: spec1IMG,
      },
      {
        photo: spec1IMG2,
      },
      {
        photo: spec1IMG3,
      },
    ],
    description:
      "The Bentley Continental GTC Mansory is the ultimate expression of luxury and exclusivity. This custom-built luxury convertible is equipped with a powerful twin-turbocharged engine and advanced suspension system, providing exceptional acceleration and handling that makes it a thrill to drive. The interior is designed to provide a spacious and luxurious environment, with premium materials and advanced technology that enhance the driving experience. The exterior of the Continental GTC Mansory is beautifully crafted, with unique Mansory styling that sets it apart from other luxury convertibles. From the sleek lines to the refined details, this vehicle is the epitome of elegance and sophistication. The Bentley Continental GTC Mansory is the perfect choice for those who demand the ultimate in luxury and performance.",
  },
  {
    idx: 8,
    class: "specials",
    brand: "Mercedes-AMG",
    model: "G 63 Brabus 800",
    seats: "5",
    kw: "588kW",
    space: "4",
    price: "1700",
    picture: spec2IMG,
    album: [
      {
        photo: spec2IMG,
      },
      {
        photo: spec2IMG2,
      },
      {
        photo: spec2IMG3,
      },
    ],
    description:
      "The Mercedes Benz G63 Brabus 800 is a powerful and luxurious off-road vehicle, designed to provide exceptional performance and capability. Equipped with a powerful turbocharged engine and Brabus-tuned suspension, it delivers impressive acceleration, handling, and traction, making it a joy to drive both on and off the road. The interior is designed to provide a spacious and luxurious environment, with premium materials and advanced technology that enhance the driving experience. The exterior of the G63 Brabus 800 is rugged and bold, with distinctive Brabus styling that sets it apart from other luxury SUVs. From the racetrack to the rocky trails, the G63 Brabus 800 is the ultimate combination of performance, capability, and luxury.",
  },
  {
    idx: 9,
    class: "specials",
    brand: "Porsche",
    model: "911 Turbo S Cabrio",
    seats: "4",
    kw: "478kW",
    space: "1",
    price: "1200",
    picture: spec3IMG,
    album: [
      {
        photo: spec3IMG,
      },
      {
        photo: spec3IMG2,
      },
      {
        photo: spec3IMG3,
      },
    ],
    description:
      "The Porsche 911 Turbo S Cabrio is the ultimate expression of luxury and performance in a convertible sports car. Equipped with a powerful twin-turbocharged engine and advanced suspension system, it delivers exceptional acceleration, handling, and agility, making it a thrill to drive with the top down. The interior is designed to provide a comfortable and luxurious environment, with premium materials and advanced technology that enhance the driving experience. The exterior of the 911 Turbo S Cabrio is sleek and sporty, with the classic Porsche styling that sets it apart from other sports cars. From the winding roads to the city streets, the 911 Turbo S Cabrio is the perfect vehicle for those who demand the ultimate driving experience with the added thrill of open-top motoring.",
  },
];

export const catDescription: Array<catDescriptionTypes> = [
  {
    class: "limos",
    heading: "Limousines",
    p: `Indulge in luxury with our limousine fleet. Our vehicles are the epitome
  of elegance and style, providing you with unparalleled comfort and
  sophistication. Our limousines feature plush seating, state-of-the-art
  sound systems, and other amenities to make your ride unforgettable.
  Whether you're making a grand entrance at a special event or impressing
  clients on a business trip, our limousines are the perfect choice for
  those who demand the best.`,
  },
  {
    class: "suvs",
    heading: "SUVs",
    p: `Take command of the road with our luxurious SUV fleet. Our vehicles
    are built to handle any terrain with style and sophistication. From
    the city streets to the rugged countryside, our SUVs provide the
    perfect combination of power and elegance. With spacious interiors,
    advanced safety features, and state-of-the-art technology, our SUVs
    are the perfect choice for those who demand the best in both luxury
    and capability. Experience the ultimate in comfort and style with our
    luxurious SUVs.`,
  },
  {
    class: "specials",
    heading: "Specials",
    p: `Experience the thrill of the ride with our exclusive supercar fleet.
    Our selection includes some of the most coveted and high-performance
    vehicles on the market, such as the Bentley Continental or the Brabus G63. These supercars offer unparalleled speed, handling, and
    agility, providing an exhilarating driving experience that is truly
    one-of-a-kind. With breathtaking design, cutting-edge technology, and
    luxurious interiors, our supercars are the perfect choice for those
    who demand the very best in performance and style. Get behind the
    wheel of a supercar and make your dreams come true with our exclusive
    rental service.`,
  },
];
