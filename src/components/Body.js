import { useEffect, useState } from "react";
import FilterSort from "./FilterSort";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import { FETCH_RESTAURANTS_API } from "../constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(FETCH_RESTAURANTS_API);
    const json = await data.json();
    setRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  };
  return (
    <div className="">
      <FilterSort />
      <MainContainer restaurants={restaurants} />
      <Footer />
    </div>
  );
};

export default Body;
