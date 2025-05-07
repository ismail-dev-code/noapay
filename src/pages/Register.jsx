import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, setUser, updateUser, setAmount, signInWithGoogle } =
    use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warning(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            setAmount(10000);
            localStorage.setItem("credit", JSON.stringify(10000));
            localStorage.setItem(
              "user",
              JSON.stringify({
                name: user.displayName,
                photoURL: user.photoURL,
              })
            );
            navigate("/");
          })
          .catch((error) => {
            setUser(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error(error));
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="card w-full my-16 mx-auto max-w-sm shrink-0 shadow-2xl bg-linear-to-b from-success to-[#EFEFEF]">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Create your NoaPay account</h1>
          <form onSubmit={handleRegister}>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="input"
              placeholder="Your Name"
            />
            <span className="bg-red-600">{nameError}</span>
            <label className="label">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input"
              required
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              required
              name="password"
              className="input"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn btn-neutral bg-primary text-white border-none mt-4"
            >
              Register
            </button>
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
            Already have an account? Please{" "}
            <Link className="text-error" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
