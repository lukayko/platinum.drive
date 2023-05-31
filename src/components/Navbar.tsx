import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

type LinkType = { name: string; path: string; idx: number };

const Navbar = () => {
  const LinksLong: Array<LinkType> = [
    { name: "Home", path: "/", idx: 1 },
    { name: "About Us", path: "/about-us", idx: 2 },
    { name: "Our Services", path: "/our-services", idx: 3 },
    { name: "Our Fleet", path: "/our-fleet", idx: 4 },
    { name: "Community", path: "/community", idx: 5 },
    { name: "Contact Us", path: "/contact-us", idx: 6 },
  ];

  const LinksShort: Array<LinkType> = [
    { name: "Home", path: "/", idx: 1 },
    { name: "About Us", path: "/about-us", idx: 2 },
    { name: "Our Services", path: "/our-services", idx: 3 },
    { name: "Our Fleet", path: "/our-fleet", idx: 4 },
    { name: "Community", path: "/community", idx: 5 },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="bg-tertiary w-full fixed top-0 h-16 mx-auto px-6 flex flex-row justify-between items-center z-50 shadow-xl lg:px-12 flex-nowrap">
      <div className="text-xl text-white ">
        {/* nazov viditelny iba na pc*/}
        <Link to="/" className="hidden md:block">
          <p className="font-['Bruno_Ace']">
            platinum<span className="text-secondary">.drive</span>
          </p>
        </Link>
        {/*nazov viditelny na mobile */}
        <p className="md:hidden font-['Bruno_Ace']">
          platinum<span className="text-secondary">.drive</span>
        </p>
      </div>
      {/*linksBig MOBILE - v dropdown menu bude aj contact us*/}
      <div
        className={`lg:hidden fixed top-16 right-0 bg-tertiary text-white w-full py-2 px-8 text-xl flex flex-col items-start shadow-xl duration-[600ms] ${
          open ? "-translate-x-50% opacity-100" : "translate-x-full opacity-0 "
        }`}
      >
        <ul>
          {LinksLong.map((link) => (
            <li key={link.idx} className="my-4">
              <NavLink
                to={link.path}
                className="p-2 ease-in-out duration-300 hover:text-secondary"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={() => setOpen(!open)} className="lg:hidden">
        {open ? (
          <XMarkIcon className="h-8 w-8 text-white transition-shadow duration-500 ease-in-out" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white transition-shadow duration-500 ease-in-out" />
        )}
      </div>
      {/*linksSmall PC - velky display - contact us bude uplne vpravo a links budu v strede*/}
      <div className="hidden lg:block">
        <ul className="flex flex-row text-base justify-center items-center text-white gap-2 lg:gap-2">
          {LinksShort.map((link) => (
            <li key={link.idx}>
              <NavLink
                to={link.path}
                className="p-2 ease-in-out duration-300 hover:text-secondary"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* contact button - iba na velkom displayi*/}
      <div className="hidden flex-row text-white gap-2 justify-center items-middle lg:flex lg:gap-4">
        <p className="hidden font-bold xl:flex flex-row my-auto items-middle">
          <PhoneIcon className="h-4 w-4 mx-1 my-auto" />
          +421 123 456 789
        </p>
        <NavLink
          to="/contact-us"
          className="ease-in-out duration-300 hover:text-secondary p-2"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
