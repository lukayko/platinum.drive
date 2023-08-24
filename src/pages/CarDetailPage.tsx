import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { vehicleData } from "../data/vehicleData";
import { PriceDisclaimer, CarCard } from "../components";
import turbo_icon from "../assets/icons/turbo.png";
import group_icon from "../assets/icons/group.png";
import suitcase_icon from "../assets/icons/suitcase.png";
import price_icon from "../assets/icons/price.png";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

const CarDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // current vehicle data
  const specificCarData = vehicleData
    .filter((element) => element.idx === location.state.carIdx)
    .shift()!;

  // IMG Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstImg: boolean = currentIndex === 0;
    const newIndex: number = isFirstImg
      ? specificCarData.album.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastImg: boolean =
      currentIndex === specificCarData.album.length - 1;
    const newIndex: number = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='mt-24 lg:mt-32 mb-16 mx-auto w-[90%]'>
      <div className='max-w-[2048px] w-full h-[325px] md:h-[550px] lg:h-[650px] mx-auto relative shadow-xl rounded-lg group'>
        <div
          style={{
            backgroundImage: `url(${specificCarData.album[currentIndex].photo})`,
          }}
          className='w-full h-full rounded-lg bg-center bg-cover duration-500'
        ></div>
        <div
          className='hidden absolute group-hover:block top-[50%] -translate-x-0 -translate-y-[50%] left-5 rounded-full p-4 bg-gray-300 opacity-90 cursor-pointer'
          onClick={() => prevSlide()}
        >
          <ChevronLeftIcon className='h-6 w-6 md:h-10 md:w-10' />
        </div>
        <div
          className='hidden absolute group-hover:block top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl text-tertiary rounded-full p-4 bg-gray-300 opacity-90 cursor-pointer'
          onClick={() => nextSlide()}
        >
          <ChevronRightIcon className='h-6 w-6 md:h-10 md:w-10' />
        </div>
        <div className='flex top-4 justify-center'>
          {specificCarData.album.map((_element, idx) => (
            <div key={idx}>
              <MinusIcon
                className={`h-10 w-10 ${
                  idx === currentIndex ? "text-secondary" : "text-tertiary"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-row justify-between mt-8'>
        <div>
          <h2 className='text-gray-500 text-lg'>{specificCarData.brand}</h2>
          <h1 className='font-bold text-2xl text-tertiary'>
            {specificCarData.model}
          </h1>
        </div>
        <div className='hidden md:block'>
          <button
            className='px-16 py-4 bg-secondary rounded-xl font-bold text-white text-lg shadow-xl duration-500 ease-in-out hover:opacity-90 hover:text-tertiary'
            type='submit'
            onClick={() =>
              navigate("/reservation", {
                state: {
                  brand: specificCarData.brand,
                  model: specificCarData.model,
                  price: specificCarData.price,
                },
              })
            }
          >
            Make A Reservation
          </button>
        </div>
      </div>
      {/* car specs */}
      <div className='flex flex-row flex-wrap gap-2 text-xs mt-2 md:mt-4  md:text-base'>
        <div className='flex flex-row text-xs gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 '>
          <img src={turbo_icon} className='h-4 w-4 lg:h-6 lg:w-6' />
          <p className='text-sm'>{specificCarData.kw}</p>
        </div>
        <div className='flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 '>
          <img src={group_icon} className='h-4 w-4 lg:h-6 lg:w-6' />
          <p className='text-sm'>{specificCarData.seats}</p>
        </div>
        <div className='flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 '>
          <img src={suitcase_icon} className='h-4 w-4 lg:h-6 lg:w-6' />
          <p className='text-sm'>{specificCarData.space}</p>
        </div>
        <div className='flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 '>
          <img src={price_icon} className='h-4 w-4 lg:h-6 lg:w-6' />
          <p className='text-sm'>{specificCarData.price}€*</p>
        </div>
      </div>
      <div>
        <p className='mt-4 text-gray-500 text-base lg:mt-2'>
          {specificCarData.description}
        </p>
      </div>
      <div className='md:hidden mt-4'>
        <button
          className='w-full px-16 py-4 bg-secondary rounded-xl font-bold text-white text-lg shadow-xl duration-500 ease-in-out hover:opacity-90 hover:text-tertiary'
          type='submit'
          onClick={() =>
            navigate("/reservation", {
              state: {
                brand: specificCarData.brand,
                model: specificCarData.model,
                price: specificCarData.price,
              },
            })
          }
        >
          Make A Reservation
        </button>
      </div>
      <div className='w-full my-4'>
        <h1 className='font-bold text-2xl text-tertiary my-1 lg:my-2'>
          See Also Other Cars in This Category
        </h1>
        <div className='w-full flex flex-col md:flex-row items-center md:items-stretch'>
          {vehicleData.map((car) => {
            if (
              car.class === specificCarData.class &&
              car.idx !== specificCarData.idx
            )
              return (
                <CarCard
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
          })}
        </div>
      </div>
      <div>
        <button
          className='my-1 py-4 w-full lg:w-1/5 bg-tertiary rounded-xl font-bold text-white text-lg shadow-xl duration-500 ease-in-out hover:opacity-90 hover:text-secondary lg:my-2'
          onClick={() => {
            navigate("/our-fleet");
          }}
        >
          Go Back
        </button>
      </div>
      <div className='md:mt-4'>
        <PriceDisclaimer />
      </div>
    </div>
  );
};

export default CarDetailPage;
