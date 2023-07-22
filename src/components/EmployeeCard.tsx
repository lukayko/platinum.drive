type employeesTypes = {
  name: string;
  position: string;
  img: any;
};

const EmployeeCard = ({ img, name, position }: employeesTypes) => {
  return (
    <div className="mt-6 lg:mt-4">
      <img
        src={img}
        className="w-[350px] h-[90%] object-cover rounded-md shadow-lg mx-auto"
      />
      <h2 className="font-bold text-lg text-center mt-1 lg:mt-2 text-tertiary">
        {name}
      </h2>
      <p className="text-center">{position}</p>
    </div>
  );
};

export default EmployeeCard;
