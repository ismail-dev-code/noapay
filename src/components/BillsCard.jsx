import React from "react";
import { Link } from "react-router";

const BillsCard = ({ data }) => {
  const { id, amount, bill_type, due_date, icon, organization } = data;
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl">
      <img className="w-full md:w-36 rounded-2xl" src={icon} alt="Bill icon" />

      <div className="flex justify-between flex-col md:flex-row flex-wrap md:items-center gap-2 md:gap-4 w-full">
        <h3 className="text-lg md:text-xl font-bold">{organization}</h3>
        <h3 className="text-base">Type: {bill_type}</h3>
        <h3 className="text-base">Amount: {amount} ৳</h3>
        <h3 className="text-base">Due Date: {due_date}</h3>
        <div>
        <Link
          to={`/bills/${id}`}
          className="btn btn-success text-white w-fit mt-2 md:mt-0"
        >
          See Details
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
