import { useState } from "react";

const FilterSort = () => {
  const [RestaurantCount, setRestaurantCount] = useState(20);

  return (
    <div className="flex justify-between shadow-sm m-2 mt-5 p-3  text-xs">
      <div>
        <h1 className="text-lg font-bold">{RestaurantCount} restaurants</h1>
      </div>
      <div className="flex">
        <h1 className="px-2 cursor-pointer">Delivery Time</h1>
        <h1 className="px-2 cursor-pointer">Rating</h1>
        <h1 className="px-2 cursor-pointer">Cost:Low to High</h1>
        <h1 className="px-2 cursor-pointer">Cost:High to Low</h1>
      </div>
    </div>
  );
};

export default FilterSort;
