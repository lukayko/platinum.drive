import patrick from "../assets/others/patrick.jpg";
import alan from "../assets/others/alan.jpg";
import christina from "../assets/others/christina.jpg";

type employeesTypes = {
  name: string;
  position: string;
  img: any;
};

export const employees: Array<employeesTypes> = [
  {
    name: "Alan",
    position: "Public Relations Director",
    img: alan,
  },
  {
    name: "Patrick",
    position: "Chief Executive Officer",
    img: patrick,
  },
  {
    name: "Christina",
    position: "Chief Marketing Officer",
    img: christina,
  },
];
