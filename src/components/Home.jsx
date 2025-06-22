import React from "react";

const Home = () => {
  const homeOptions = [
    { name: "Doctors", rout: "/doctors" },
    { name: "Hospitals", rout: "/hospitals" },
    { name: "Medicine", rout: "/medicine" },
  ];
  return <div className="mt-12 center h-screen">
    <div className="center gap-8 lg:gap-24 flex-wrap">
      {
      homeOptions?.map((item,idx)=>(
        
        <div key={idx} className="h-24 w-44 lg:h-44 lg:w-72 text-white font-semibold bg-gradient-to-r hover:bg-pink-600 to-pink-600 center rounded-2xl hover:scale-105 transition-all hover:duration-300 hover:ease-in-out ">{item?.name}</div>
      ))
      }
    </div>
  </div>;
};

export default Home;
