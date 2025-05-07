import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { signIn, signInWithGoogle, setAmount, resetPassword } =
    useContext(AuthContext);

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

        toast.success("You've logged in successfully.");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        localStorage.setItem("credit", JSON.stringify(10000));
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: result.user.displayName,
            photoURL: result.user.photoURL,
          })
        );
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Check your email for password reset instructions.");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Navbar />
      <div className="card bg-base-100 w-full my-16 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Log in to NoaPay</h1>
          <form onSubmit={handleLogIn}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input"
              placeholder="Password"
            />
            <div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link link-hover"
              >
                Forgot password?
              </button>
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
            Login with Google
          </button>
          <p>
            New to this website? Please{" "}
            <Link className="text-error" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
