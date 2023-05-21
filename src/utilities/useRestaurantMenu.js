import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DATA } from "../constants";

const useRestaurantMenu = (resId) => {
  const Fetch_API = FETCH_RESTAURANT_DATA + resId + "&submitAction=ENTER";
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(Fetch_API);
    const json = await data.json();
    const menuItemList =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemList.map((item) => {
      if (
        item?.card?.card["@type"] === itemCategory ||
        item?.card?.card["@type"] === nestedItemCategory
      )
        return item?.card?.card;
    });

    const modifiedData = {
      info: json?.data?.cards[0]?.card?.card?.info,
      menu: menu.filter((value) => value != undefined),
    };

    setRestaurant(modifiedData);
  };

  return restaurant;
};

export default useRestaurantMenu;
