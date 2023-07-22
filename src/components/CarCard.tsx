import turbo_icon from "../assets/icons/turbo.png";
import group_icon from "../assets/icons/group.png";
import suitcase_icon from "../assets/icons/suitcase.png";
import price_icon from "../assets/icons/price.png";
import { useNavigate } from "react-router-dom";

type CarCardType = {
  carIdx: number;
  carClass: string;
  carBrand: string;
  carModel: string;
  carSeats: string;
  carKw: string;
  carSpace: string;
  carPrice: string;
  carPic: string;
};

const CarCard = ({
  carIdx,
  carClass,
  carBrand,
  carModel,
  carSeats,
  carKw,
  carSpace,
  carPrice,
  carPic,
}: CarCardType): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-white p-3 rounded-xl shadow-xl w-[80%] m-4  duration-500 md:w-[30%] hover:scale-105 hover:shadow-2xl hover:shadow-secondary hover:cursor-pointer"
      onClick={() =>
        navigate(`/our-fleet/${carClass}/${carIdx}`, {
          state: {
            carIdx,
          },
        })
      }
    >
      <div className="w-full h-auto mb-0.5 shadow-lg rounded-md">
        <img className="w-full h-auto object-contain rounded-md" src={carPic} />
      </div>

      <div>
        <h2 className="text-sm text-gray-500 md:text-base">{carBrand}</h2>
        <h1 className="text-base font-bold tracking-wider -mt-1 md:text-lg lg:text-2xl ">
          {carModel}
        </h1>
      </div>

      <div className="flex flex-row flex-wrap gap-2 text-xs mt-2 md:mt-4  md:text-base">
        <div className="flex flex-row text-xs gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 ">
          <img src={turbo_icon} className="h-4 w-4 lg:h-6 lg:w-6" />
          <p className="text-sm">{carKw}</p>
        </div>
        <div className="flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 ">
          <img src={group_icon} className="h-4 w-4 lg:h-6 lg:w-6" />
          <p className="text-sm">{carSeats}</p>
        </div>
        <div className="flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 ">
          <img src={suitcase_icon} className="h-4 w-4 lg:h-6 lg:w-6" />
          <p className="text-sm">{carSpace}</p>
        </div>
        <div className="flex flex-row gap-1 items-center py-1 px-2 bg-gray-200 rounded-md lg:gap-2 ">
          <img src={price_icon} className="h-4 w-4 lg:h-6 lg:w-6" />
          <p className="text-sm">{carPrice}€*</p>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
