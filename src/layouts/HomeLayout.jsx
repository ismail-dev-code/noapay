import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="lg:w-11/12 min-h-[calc(100vh-317px)] lg:mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
