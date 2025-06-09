import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarContents = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Contact", route: "/contact" },
  ];
  return (
    <nav className="relative flex justify-center items-center p-2 w-full">
      <div className="absolute left-[2%] font-bold lg:text-lg">HealthSync</div>
      <div className="options bg-[#3A59D1] text-white p-2 rounded-md w-1/2 center lg:text-lg">
        <ul className="flex mx-auto gap-8 font-semibold">
          {navbarContents?.map((navOption, idx) => (
            <li key={idx}>
              <Link to={navOption?.route}>{navOption?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
