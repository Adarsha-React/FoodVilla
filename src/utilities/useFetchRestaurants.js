import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_API } from "../constants";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(FETCH_RESTAURANTS_API);
    const json = await data.json();
    //setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    const modifiedData = {
      restaurants: json?.data?.cards[2]?.data?.data?.cards,
      carousel: json.data?.cards[0]?.data?.data?.cards,
    };

    setRestaurants(modifiedData);
  };

  return restaurants;
};

export default useFetchRestaurants;
