import { useEffect, useState } from "react";
import FilterSort from "./FilterSort";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import useFetchRestaurants from "../utilities/useFetchRestaurants";

const Body = () => {
  const restaurants = useFetchRestaurants();

  console.log(restaurants);
  return (
    <div className="">
      <FilterSort resCount={restaurants.length} />
      <MainContainer restaurants={restaurants} />
    </div>
  );
};

export default Body;
