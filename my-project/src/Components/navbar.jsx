import React, { useState } from "react";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between md:px-10 px-8 z-50 w-full fixed">
        <div>
          <ul className="md:flex hidden items-center gap-5">
            <li>
              <a
                href="#home"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/mens"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-24 w-20">
          <a to={"/home"}>
            <h1 className=" md:text-2xl text-xl px-2 text-center  ">Zeno</h1>
            <hr />
            <h3 className=" md:text-xl text-lg  tracking-[0.6em]">Foodi</h3>
          </a>
        </div>
        <div className="flex items-center md:gap-5 gap-3 md:fixed md:right-0 md:px-10">
          <IoIosSearch className="md:text-xl text-lg" />
          <div className=" relative">
            <a href={"/cart"}>
              <FaCartShopping className="md:text-xl text-lg" />
            </a>
            <h1 className=" absolute top-[-13px] right-[-9px] text-red-700 font-medium">
              0
            </h1>
          </div>
          <a to={"/login"} className="md:text-xl text-sm">
            LOGIN
          </a>
        </div>
        <div onClick={() => setToggle((pre) => !pre)} className="">
          {toggle ? "" : <IoMdMenu className="flex md:hidden text-3xl" />}
        </div>
        <div
          className={`md:hidden absolute bg-[#ebeef2] top-0 bottom-0 h-screen w-[70%] right-0 ${
            toggle ? "flex items-center flex-col justify-center" : "hidden"
          }`}
        >
          <IoMdClose
            className="flex md:hidden text-3xl text-right fixed right-0 top-0 m-5"
            onClick={() => setToggle((prev) => !prev)}
          />
          <ul
            className={`md:hidden ${
              toggle
                ? "flex right-[90%] duration-00 ease-in-out"
                : "hidden right-[-100%] duration-00 ease-in-out"
            } flex-col items-center gap-20`}
          >
            <li>
              <a
                href="/home"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/womens"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="/mens"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Mens
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : "text-black"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
