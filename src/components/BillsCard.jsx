import React from "react";

const BillsCard = ({ data }) => {

  const { amount, bill_type, due_date, icon, organization } = data;
  return (
    <div className="flex justify-between items-center gap-5 border p-6 rounded-2xl bg-gray-100">
      <img className="md:w-36 w-full rounded-2xl" src={icon} alt="" />
      <h3 className="text-xl font-bold">{organization}</h3>
      <h3>Type: {bill_type}</h3>
      <h3>Amount: {amount} ৳</h3>
      <h3>Due Data: {due_date}</h3>
      <button className="btn-success btn text-white">See Details</button>
    </div>
  );
};

export default BillsCard;
