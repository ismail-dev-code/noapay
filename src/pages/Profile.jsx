import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const result = JSON.parse(localStorage.getItem("user"));
  const auth = getAuth();
  const [updatedValue, setUpdatedValue] = useState(result);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    if (!name || !photoURL) {
      alert("you must fill all value");
    } else {
      setUpdatedValue({
        name: name,
        photoURL: photoURL,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: name, photoURL: photoURL })
      );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <div className="relative">
        <img
          className="rounded-full w-24 h-24"
          src={updatedValue.photoURL}
          alt=""
        />
        {edit ? (
          ""
        ) : (
          <span
            onClick={() => setEdit(true)}
            className="absolute bottom-2 cursor-pointer  right-0"
          >
            <FaEdit className="text-success" size={30} />
          </span>
        )}
      </div>
      <h1 className="font-bold text-xl">Name: {updatedValue.name}</h1>
      <p>Email: {auth.currentUser.email}</p>
      {edit ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label className="label block">Name</label>
            <input
              type="name"
              name="name"
              className="input block"
              placeholder="name"
            />
            <label className="label block">PhotoURL</label>
            <input
              type="photoURL"
              name="photoURL"
              className="input block"
              placeholder="photoURL"
            />

            <button
              type="submit"
              className="btn btn-success block bg-primary text-white border-none mt-4"
            >
              Submit
            </button>
            <button
              onClick={() => setEdit(false)}
              className="btn btn-neutral block text-white border-none mt-4"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
