import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full mt-16 h-60 bg-tertiary text-white">
      {/* Logo + socials */}
      <div>
        <p>platinum.drive</p>
        <div></div>
      </div>
      {/*Spodny navbar + copyright */}
      <div>
        <div>
          <ul>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
          </ul>
        </div>
        <p>Copyright text</p>
      </div>
    </section>
  );
};

export default Footer;
