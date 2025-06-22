import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isBurger, setIsBurger] = useState(false);
  const navbarContents = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Contact", route: "/contact" },
  ];

  const handleBurger = () => {
    setIsBurger(!isBurger);
    console.log(isBurger);
  };

  // useEffect(()=>{
  //   const handleResize=()=>{
  //     if(window.innerWidth>=768){
  //       setIsBurger(false)
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return ()=> window.removeEventListener("resize", handleResize)
  // },[])
  return (
    <div className="fixed w-full top-2">
      <nav className="relative flex justify-center items-center p-2 w-full  rounded-2xl  ">
        <div
          onClick={handleBurger}
          className="text-red-500 md:!hidden absolute right-2 cursor-pointer">
          {isBurger ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars  "></i>
          )}
        </div>

        <div className="absolute left-[2%] font-bold lg:text-lg hover:scale-115 duration-300 ease-in-out hover:text-pink-600">
          HealthSync
        </div>
        <div
          className={`absolute  top-0 right-[25px] md:relative ${
            isBurger ? "block" : "!hidden"
          } md:!flex bg-pink-600 opacity-90 text-white p-4 md:p-2 rounded-md md:w-1/2 center lg:text-lg`}>
          <ul className={`md:flex  mx-auto gap-8 font-semibold`}>
            {navbarContents?.map((navOption, idx) => (
              <li key={idx}>
                <Link to={navOption?.route}>{navOption?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
