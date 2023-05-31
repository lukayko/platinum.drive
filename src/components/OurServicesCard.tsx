import { useNavigate } from "react-router-dom";

type CardTypes = {
  img: any;
  text: string;
  heading: string;
  btnText: string;
  btnPath: string;
};

const OurServicesCard = ({
  img,
  text,
  heading,
  btnText,
  btnPath,
}: CardTypes) => {
  const navigate = useNavigate();

  return (
    <div className="mt-12 flex flex-col lg:flex-row h-auto xl:h-[45vh] w-full">
      <img
        src={img}
        className="w-full lg:max-w-[490px] h-full object-fill rounded-lg shadow-lg"
      />
      <div className="mt-2 lg:mt-0 lg:ml-6 xl:ml-12 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-2xl text-tertiary">{heading}</h1>
          <p className="mt-2 text-gray-500">{text}</p>
        </div>
        <button
          className="bg-secondary text-white rounded-lg mt-4 p-3 w-full lg:w-3/5 shadow-lg ease-in-out duration-500 font-bold"
          onClick={() => navigate(`${btnPath}`)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default OurServicesCard;
