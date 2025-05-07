import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, setAmount } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const stored = JSON.parse(localStorage.getItem("credit"));
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.displayName, photoURL: user.photoURL })
        );
        if (user) {
          if (stored) {
            setAmount(stored);
          } else {
            setAmount(10000);
            localStorage.setItem("credit", JSON.stringify(10000));
          }
        }
        alert("user log in successfully..");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        localStorage.setItem("credit", JSON.stringify(10000));
        localStorage.setItem(
          "user",
          JSON.stringify({ name: result.user.displayName, photoURL: result.user.photoURL })
        );
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {" "}
      <Navbar></Navbar>
      <div className="card bg-base-100 w-full my-16 mx-auto bg-linear-to-b from-success to-[#EFEFEF] max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Log in to NoaPay</h1>
          <form onSubmit={handleLogIn}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral bg-primary text-white border-none mt-4"
            >
              Login
            </button>
            <p className="text-red-600">{error}</p>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            New to this website? Please{" "}
            <Link className="text-error" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
