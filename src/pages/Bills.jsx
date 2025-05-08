import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BillsCard from "../components/BillsCard";
import { Helmet } from "react-helmet-async";

const Bills = () => {
  const allData = useLoaderData();
  const [filterData, setFilterData] = useState(allData);
  const handleFilter = (value) => {
    const result = allData.filter((data) => data.bill_type === value);
    setFilterData(result);
  };

  return (
    <>
      <Helmet>
        <title>NoaPay | Bills</title>
      </Helmet>
      <div className="md:mt-20 mt-12 text-center">
        <h2 className="text-4xl font-bold pb-4">My Bills</h2>
        <p className="text-gray-500">
          Keep all your bills organized. Easily check due dates and make
          payments anytime.
        </p>
        <div className="flex justify-end">
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="m-1">
              <button className="btn-success btn text-white cursor-pointer">
                Filtered by Bill
              </button>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              {[
                "Electricity",
                "Internet",
                "Tuition",
                "Water",
                "Credit_card",
                "Gas",
              ].map((value) => (
                <li>
                  <button key={value} onClick={() => handleFilter(value)}>
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-4 mt-8">
          {filterData.map((data) => (
            <BillsCard key={data.id} data={data}></BillsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bills;
