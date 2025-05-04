import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/noapay-logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={"mr-5"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"mr-5"} to={"/bills"}>
          Bills
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <header className="border-b border-gray-300">
        <div className="navbar lg:w-11/12 lg:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="hidden md:block h-10 w-24" src={logoImg} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn bg-success mr-4 text-white">
          Login
        </Link>
        <Link to={"/register"} className="btn bg-success text-white">
          Register
        </Link>
      </div>
    </div>
    </header>
  );
};

export default Navbar;
