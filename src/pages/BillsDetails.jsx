import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BillsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [bill, setBill] = useState({});
  console.log(bill);
  useEffect(() => {
    const billDetails = data.find((singleBill) => singleBill.id == id);
    setBill(billDetails);
  }, [data, id]);

  return (
    <>
      <Navbar></Navbar>
      <div className="card mx-auto my-8 md:my-16 bg-base-100 w-full max-w-md md:max-w-2xl lg:card-side shadow-sm">
  <div className="flex justify-center items-center p-4 md:p-6 lg:p-4">
    <img className="rounded-lg w-24 md:w-32 lg:w-40" src={bill.icon} alt="bill icon" />
  </div>
  <div className="card-body p-4 md:p-6">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{bill.organization}</h2>
    <h3 className="text-lg md:text-xl">Bill Type: {bill.bill_type}</h3>
    <p className="text-sm md:text-base">Amount: {bill.amount} ৳</p>
    <p className="text-sm md:text-base">Due Date: {bill.due_date}</p>
    <button className="btn btn-success text-white mt-4">Pay Bill</button>
  </div>
</div>

      <Footer></Footer>
    </>
  );
};

export default BillsDetails;
