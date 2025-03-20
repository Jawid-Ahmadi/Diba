import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  FaBagShopping,
  FaHouse,
  FaInfo,
  FaNewspaper,
  FaPhone,
  FaBars,
  FaX,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import Counter from "../extras/Counter";
import prof from "../assets/prof.jpg";
import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ModalContext } from "../layouts/MainLayout";
import logo from "../assets/logo.png";
function Navbar() {
  let curentTheme = localStorage.getItem("mode");
  const [mode, setMode] = useState(curentTheme);
  const { active, setActive } = useContext(ModalContext);
  function handle() {
    setActive(!active);
  }
  const isLogin = false;
  const [openNav, setOpenNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  function searchBarToggle() {
    setSearchBar(!searchBar);
  }
  function navToggle() {
    setOpenNav(!openNav);
  }
  let newTheme = "";
  function changeMode(e) {
    localStorage.setItem("mode", e.currentTarget.getAttribute("_mode"));
    newTheme = localStorage.getItem("mode");
    setMode(newTheme);
  }

  if (mode == "light") {
    document.documentElement.setAttribute("theme", mode);
  } else {
    document.documentElement.setAttribute("theme", mode);
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "mr-10 hidden md:block hover:text-pink-500 border-b-2 border-b-pink-400"
      : "mr-10 hidden md:block hover:text-pink-500";
  const linkClassDropDown = ({ isActive }) =>
    isActive
      ? "flex items-center ml-10 mb-3 hover:text-pink-500 text-pink-500"
      : "flex items-center ml-10 mb-3 hover:text-pink-500 ";

  return (
    <nav className="sticky dark:bg-primary dark:text-secondary top-0 z-20 bg-white border-b border-b-primary flex justify-between items-center py-4 px-5 font-poppins text-slate-900">
      <div className="hidden md:flex items-center">
        <img className="w-10" src={logo} alt="" />
        <h1 className="ml-4 text-2xl text-pink-400">Diba Beauty</h1>
      </div>

      <div className="relative flex w-full md:w-auto justify-between md:justify-end">
        <div
          className={
            openNav
              ? "absolute dark:bg-primary md:hidden -left-5 top-13 w-60 bg-white"
              : "hidden md:hidden absolute -left-5 top-13 w-60 bg-white"
          }
        >
          <ul className="">
            <li>
              <NavLink className={linkClassDropDown} to="/">
                <FaHouse className="mr-3" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClassDropDown} to="/about">
                <FaInfo className="mr-3" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClassDropDown} to="/shop">
                <FaBagShopping className="mr-3" />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClassDropDown} to="/blog">
                <FaNewspaper className="mr-3" />
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClassDropDown} to="/contact">
                <FaPhone className="mr-3" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="flex justify-between items-center mr-5">
          <li className="md:hidden text-2xl cursor-pointer" onClick={navToggle}>
            {openNav ? <FaX /> : <FaBars />}
          </li>
          <li>
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center mr-10">
            <div className="relative overflow-hidden flex justify-between items-center w-20 h-9 px-2 py-2 rounded-full bg-white mr-10">
              <i id="theme_bg" className="w-8 h-8 absolute rounded-full z-0 bg-blue-400 top-[2.5px] left-[2.4px]"></i>
              <FaSun className="text-xl  relative z-2 text-white dark:text-primary cursor-pointer" _mode="light" onClick={changeMode} />
              <FaMoon className="text-xl relative z-2 text-primary dark:text-white cursor-pointer " _mode="dark" onClick={changeMode} />
            </div>
            <FaMagnifyingGlass
              onClick={searchBarToggle}
              className="mr-5 text-xl cursor-pointer hover:text-pink-500"
            />

            {searchBar ? (
              <div className="dark:bg-primary dark:text-white absolute top-11 rounded-full -right-20 md:right-0 flex justify-center items-center px-4 py-2 bg-white border border-primary">
                <input
                  className="outline-0 mr-2"
                  type="text"
                  placeholder="Search..."
                />
                <button>
                  <FaMagnifyingGlass className=" text-xl cursor-pointer hover:text-pink-500" />
                </button>
              </div>
            ) : (
              <></>
            )}

            {
              isLogin ? 
            <div className="relative">
              <Counter number="0" up="-8" right="-13" />
              
              <Link to="#cart">
                <FaBagShopping
                  onClick={() => handle()}
                  className="text-xl cursor-pointer hover:text-pink-500"
                />
              </Link>
            </div> : <></>
            }
          </div>

          <div>
            {isLogin ? (
              <a href="">
                <img
                  src={prof}
                  alt=""
                  className="rounded-full w-10 h-10 border border-pink-400"
                />
              </a>
            ) : (
              <div className="flex justify-center items-center md:text-md text-sm">
                <Link to="/login" className="mr-5 hover:text-pink-500">
                  Login
                </Link>
                <a href="#" className="hover:text-pink-500 text-nowrap">
                  Sign In
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
