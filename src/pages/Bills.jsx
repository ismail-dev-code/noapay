import React from "react";
import { useLoaderData } from "react-router";
import BillsCard from "../components/BillsCard";

const Bills = () => {
  const allData = useLoaderData();
 
  return (
    <div className="md:mt-20 mt-12 text-center">
      <h2 className="text-4xl font-bold pb-4">My Bills</h2>
      <p className="text-gray-500">Keep all your bills organized. Easily check due dates and make payments anytime.</p>
      <div className="space-y-4 mt-8">
       
        {allData.map(data=><BillsCard data={data}></BillsCard>)}
        
      </div>
    </div>
  );
};

export default Bills;
