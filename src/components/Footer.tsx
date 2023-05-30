import { Link } from "react-router-dom";
import { format } from "date-fns";
import IGIcon from "../assets/icons/instagram.png";
import FBIcon from "../assets/icons/facebook.png";
import birdIcon from "../assets/icons/twitter.png";

type LinkType = { name: string; path: string; idx: number };

const Footer = () => {
  const LinksLong: Array<LinkType> = [
    { name: "Home", path: "/", idx: 1 },
    { name: "About Us", path: "/about-us", idx: 2 },
    { name: "Our Services", path: "/our-services", idx: 3 },
    { name: "Our Fleet", path: "/our-fleet", idx: 4 },
    { name: "Community", path: "/community", idx: 5 },
    { name: "Contact Us", path: "/contact-us", idx: 6 },
  ];

  const date = new Date();

  return (
    <section className="w-full mt-16 h-60 bg-tertiary text-white flex flex-row justify-between">
      {/* Logo + socials */}
      <div className="flex flex-col justify-start p-12">
        <p className="font-['Bruno_Ace'] text-2xl">
          platinum<span className="text-secondary">.drive</span>
        </p>
        <div className="flex flex-row gap-2 mt-2">
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
      {/*Spodny navbar + copyright */}
      <div className="flex flex-row gap-12 p-12">
        <div>
          <ul>
            {LinksLong.map((link) => {
              return (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={"/cookies"}
                className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
              >
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link
                to={"/community-guide"}
                className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
              >
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link
                to={"/tos"}
                className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to={"/legal"}
                className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
              >
                Legal Documentation
              </Link>
            </li>
            <li>
              <Link
                to={"/faq"}
                className="my-2 ease-in-out duration-300 hover:opacity-100 opacity-60"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-12 flex flex-col justify-between">
        <p className=" opacity-60 ease-in-out duration-300 hover:opacity-100">
          Today's Date: {format(date, "dd MMM yyyy")}
        </p>
        <p>© 2023 ELSI Dev. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
