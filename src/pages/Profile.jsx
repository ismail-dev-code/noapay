import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

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
      toast.error("you must fill all value");
    } else {
      setEdit(false);
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
    <div className="flex justify-center items-center flex-col my-12 px-4 md:px-8 lg:px-0">
      <div className="relative">
        <img
          className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover"
          src={updatedValue?.photoURL}
          alt="User"
        />
        {!edit && (
          <span
            onClick={() => setEdit(true)}
            className="absolute bottom-2 right-0 cursor-pointer"
          >
            <FaEdit className="text-success" size={24} />
          </span>
        )}
      </div>

      <h1 className="font-bold text-lg md:text-xl mt-4">
        Name: {updatedValue?.name}
      </h1>
      <p className="text-sm md:text-base">Email: {auth?.currentUser?.email}</p>

      {edit && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mt-4 space-y-3"
        >
          <div>
            <label className="label block text-sm md:text-base">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="label block text-sm md:text-base">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="input input-bordered w-full"
              placeholder="Photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-full bg-primary text-white border-none"
          >
            Submit
          </button>
          <button
            onClick={() => setEdit(false)}
            type="button"
            className="btn btn-neutral w-full text-white border-none"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
