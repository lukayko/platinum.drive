import { Outlet } from "react-router-dom";
import { CarCard, CarCategory, PriceDisclaimer } from "../components";
import { catDescription, vehicleData } from "../data/vehicleData";

const OurFleet = () => {
  return (
    <div className="mt-24 mx-auto w-[90%]">
      <Outlet />
      <div>
        <h1 className="text-xl font-bold text-tertiary md:text-3xl lg:text-4xl ">
          Explore Our Fleet
        </h1>
        <p className="mt-1 text-gray-500 text-base lg:mt-2">
          We take great pride in our car fleet and go to great lengths to ensure
          that our vehicles are not only the best in terms of quality but also
          in terms of style and appearance. Our cars are guaranteed to turn
          heads wherever you go, and we're confident that you'll feel like a
          celebrity every time you're behind the wheel. So, whether you're
          looking for an unforgettable driving experience or need to make a
          lasting impression at your next event, platinum.drive is here to
          provide you with the best car rental service possible.
        </p>
      </div>
      {/* cars category + carCard */}
      {catDescription.map((category, idx) => {
        return (
          <CarCategory
            key={idx}
            heading={category.heading}
            paragraph={category.p}
          >
            {vehicleData.map((car, idx) => {
              if (car.class === category.class) {
                return (
                  <CarCard
                    key={idx}
                    carIdx={car.idx}
                    carClass={car.class}
                    carBrand={car.brand}
                    carModel={car.model}
                    carSeats={car.seats}
                    carKw={car.kw}
                    carSpace={car.space}
                    carPrice={car.price}
                    carPic={car.picture}
                  />
                );
              }
            })}
          </CarCategory>
        );
      })}
      {/* disclaimer */}
      <PriceDisclaimer />
    </div>
  );
};

export default OurFleet;
