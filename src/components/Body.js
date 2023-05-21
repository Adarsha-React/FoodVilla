import { useEffect, useState } from "react";
import FilterSort from "./FilterSort";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import useFetchRestaurants from "../utilities/useFetchRestaurants";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";

const Body = () => {
  const restaurantsInfo = useFetchRestaurants();
  return !restaurantsInfo ? (
    <Shimmer />
  ) : (
    <>
      <Carousel carousel={restaurantsInfo?.carousel} />
      <FilterSort resCount={restaurantsInfo?.restaurants?.length} />
      <MainContainer restaurants={restaurantsInfo?.restaurants} />
    </>
  );
};

export default Body;
