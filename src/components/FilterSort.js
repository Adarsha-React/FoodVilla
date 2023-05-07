import { useEffect, useState } from "react";

const FilterSort = ({ resCount }) => {
  return (
    <>
      <div className="grid grid-flow-col justify-around text-xs pt-5">
        <div>
          <h1 className="text-lg font-bold">{resCount} restaurants</h1>
        </div>
        <div className="flex">
          <h1 className="px-2 pt-2 cursor-pointer text-[10px] font-mono hover:font-semibold">
            Delivery Time
          </h1>
          <h1 className="px-2 pt-2 cursor-pointer text-[10px] font-mono hover:font-semibold">
            Rating
          </h1>
          <h1 className="px-2 pt-2 cursor-pointer text-[10px] font-mono hover:font-semibold">
            Cost:Low to High
          </h1>
          <h1 className="px-2 pt-2 cursor-pointer text-[10px] font-mono hover:font-semibold">
            Cost:High to Low
          </h1>
        </div>
      </div>
      <hr className="w-[68%] ml-[201px] h-px bg-gray-200 border-0 "></hr>
    </>
  );
};

export default FilterSort;
