import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Logo from "../../src/assets/logo (2).png";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const [showmodal, setShowModal] = useState(true);
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const hendleLogout = () => {
    logOutUser()
      .then(() => {
        navigate("/");
        toast.success("Logout successfully");
        setShowModal(true);
      })
      .catch(() => {});
  };

  const [them, setThem] = useState("light");

  useEffect(() => {
    if (them) {
      document.querySelector("html").setAttribute("data-theme", them);
    } else {
      console.log("light");
    }
  }, [them]);

  const hendleTheme = () => {
    setThem(them === "dark" ? "light" : "dark");
  };

  const Links = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={` font-medium`}
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-book"
          className={`${user ? "block" : "hidden"} font-medium`}
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-borrow"
          className={`${user ? "block" : "hidden"} font-medium`}
        >
          My Borrow
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={`font-medium`}
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200 sticky top-0 z-50 shadow">
      <div className="navbar max-w-[1350px] mx-auto justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow "
            >
              {Links}
              <Link
                to="/login"
                className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md sm:hidden flex my-2 "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md sm:hidden flex "
              >
                Register
              </Link>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img className="w-8" src={Logo} alt="" />
            <h1 className="sm:text-2xl text-xl font-extrabold w-40">
              Page<span className="text-primary">Flow</span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="md:navbar-end flex relative ">
          <label className="swap swap-rotate sm:mr-5">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              onClick={hendleTheme}
              value=""
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {
            user? <button
            onClick={hendleLogout}
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md lg:block hidden"
          >
            Log Out
          </button> : <>
            <Link
            to="/login"
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary hover:bg-secondary text-white font-bold py-1.5 px-4 rounded-md ml-4 hidden sm:flex"
          >
            Register
          </Link>
            </>
          }

          {user && (
            <>
              <div onClick={() => setShowModal(!showmodal)}>
                <img
                  className="h-10 w-10 bg-base-300 rounded-full ml-5 border border-primary"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div
                className={`${
                  showmodal ? "hidden" : "block"
                } border absolute top-12 right-0 w-60 bg-base-100  border-gray-200  py-5 px-3 text-center rounded-2xl shadow-xl z-100`}
              >
                <h1 className="mb-3 text-2xl font-bold">{user?.displayName}</h1>
                <button
                  onClick={hendleLogout}
                  className="btn btn-primary rounded-md border-none mt-4"
                >
                  Log Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
