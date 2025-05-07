import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Register = () => {
  const { createUser, setUser, updateUser, setAmount } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character..");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
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
        alert(errorMessage);
      });
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
              className="input"
              placeholder="Your Name"
            />
            <span className="bg-red-600">{nameError}</span>
            <label className="label">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
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
            <label className="label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="btn btn-neutral bg-primary text-white border-none mt-4"
            >
              Register
            </button>
          </form>
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
