import { BsMoonStars, BsSun } from "react-icons/bs";
import useUiTheme from "../hooks/context/useTheme";
import { FiBell, FiMessageSquare } from "react-icons/fi";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { PiRectangleDashed } from "react-icons/pi";
import {  IoSettingsOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Search from "../components/search";
import { useEffect } from "react";
import serverApi, { HttpMethod } from "../api";


interface IUserDataResponse{
      name:string,
      age:number,
}


const Header = () => {
  const { toggleTheme, T } = useUiTheme();

  useEffect(()=>{
     serverApi< IUserDataResponse>('data','token1', HttpMethod.GET)
        .then((d) => console.log(d))
        .catch((e)=>console.log(e));
    },[])


  return (
    <header
      className={`sticky top-0 left-0 z-[100] w-full p-4 flex items-center justify-between ${
        T ? "bg-ui-light-primary" : "bg-ui-dark-primary"
      } drop-shadow-md`}
    >
      {/* left */}
      <div className=" flex gap-4 items-center">

        <RiMenu2Line className="text-gray-400 text-2xl"  />
        <Search/>

      


      </div>
      {/* right */}
      <div className=" flex items-center gap-4">
     
        <button className=" cursor-pointer" onClick={toggleTheme}>
          {T ? (
            <BsMoonStars className="text-xl" />
          ) : (
            <BsSun className=" text-gray-300 hover:text-gray-100 text-xl" />
          )}
        </button>
        

        <div className="relative">
          <MdOutlineShoppingCart  className={`${T ? "text-gray-900" : "text-gray-300"} text-xl cursor-pointer`} />
          <span className="absolute -top-2 -right-1 h-4 w-4 flex size-3">
            <span className="relative inline-flex size-3 h-4 w-4 text-xs font-bold text-white rounded-full bg-sky-500 items-center justify-center">5</span>
          </span>
        </div>

        <div className="relative">
          <FiBell className={`${T ? "text-gray-900" : "text-gray-300"} text-xl cursor-pointer`} />
          <span className="absolute -top-2 -right-1 h-4 w-4 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex size-3 h-4 w-4 text-xs font-bold text-white rounded-full bg-purple-500 items-center justify-center">5</span>
          </span>
        </div>

        <div className="relative">
          <FiMessageSquare className={`${T ? "text-gray-900" : "text-gray-300"} text-xl cursor-pointer`} />
          <span className="absolute -top-2 -right-1 h-4 w-4 flex size-3">
            <span className="relative inline-flex size-3 h-4 w-4 text-xs font-bold text-white rounded-full bg-red-500 items-center justify-center">5</span>
          </span>
        </div>

        <PiRectangleDashed className={` ${T ? "text-gray-900":"text-gray-300" } text-xl cursor-pointer`}  />

        <MdMenu className={` ${T ? "text-gray-900":"text-gray-300" } text-xl cursor-pointer`}  />

        <div className="flex gap-1 items-center justify-center cursor-pointer">
          <img src="R.jpg" alt="" className="w-8 h-8 rounded-full items-center  "/>
          <div className=" flex-col gap-2 leading-0.5">
            <p className="text-gray-500 text-sm font-semibold">Alison</p>
            <p className="text-gray-300 text-sm font-semibold">Administor</p>
          </div>
        </div>

        <IoSettingsOutline className={`${T?"text-gray-900":"text-gray-300" } animate-spin text-xl cursor-pointer`}  />




      </div>
    </header>
  );
};

export default Header;
