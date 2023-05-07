import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_API } from "../constants";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  //console.log(FETCH_RESTAURANTS_API);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(FETCH_RESTAURANTS_API);
    const json = await data.json();
    setRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  };

  //console.log(restaurants);
  return restaurants;
};

export default useFetchRestaurants;
