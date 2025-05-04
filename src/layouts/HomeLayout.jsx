import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default HomeLayout;
