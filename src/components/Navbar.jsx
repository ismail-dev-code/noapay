import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/noapay-logo.png";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTheme from "../utilities/useTheme";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logOut, amount, userProfile } = use(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire({
          title: <p>Log Out Successfully.</p>,
          icon: "error",
          showConfirmButton: true,
          timer: 3000,
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
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
        <NavLink className={"mr-5"} to={"/profile"}>
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 shadow-2xl bg-white text-black">
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
            <img
              className="hidden md:block h-10 w-24"
              src={logoImg}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          
          <div className="nav-btn flex gap-5">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <img
                    className="w-10 rounded-full cursor-pointer"
                    src={`${
                      userProfile?.photoURL ? userProfile?.photoURL : userImg
                    }`}
                    alt="Img"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button>Credits: {amount}</button>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to={"/login"} className="btn text-white btn-success">
                  Login
                </Link>
                <Link to={"/register"} className="btn btn-success text-white">
                  Register
                </Link>
                
              </>
            )}
          </div>
          <button className="pl-4">
                  <input
                    type="checkbox"
                    value="dark"
                    className="toggle theme-controller mr-6"
                    checked={theme === "dark"}
                    onChange={(e) => toggleTheme(e.target.checked)}
                  />
                </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
