import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_RESTAURANT_DATA } from "../constants";
import ItemCard from "./ItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [itemCards, setItemCards] = useState([]);

  const Fetch_API = FETCH_RESTAURANT_DATA + resId + "&submitAction=ENTER";
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(Fetch_API);
    const json = await data.json();
    console.log(json?.data?.cards);

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    setItemCards(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  console.log(itemCards);

  return restaurant?.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="grid grid-row-col justify-center">
        <div className="pt-5 flex justify-between">
          <div>
            <h1 className="font-semibold text-xs">{restaurant?.name}</h1>
            <h1 className="text-[9px] pt-1">
              {restaurant?.cuisines?.join(",")}
            </h1>
            <h1 className="text-[9px]">
              {restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString}
            </h1>
          </div>
          <div className="shadow-md p-2 py-1 rounded-md bg-slate-100">
            <h1 className="text-[9px] font-bold py-2">
              ⭐{" " + restaurant?.avgRating}
            </h1>
            <hr className="w-15 h-px bg-gray-300 border-0"></hr>
            <h1 className="text-[8px] font-semibold pt-1">
              {restaurant?.totalRatingsString}
            </h1>
          </div>
        </div>
        <div>
          <h1>
            {itemCards.map((itemCard) => (
              <ItemCard itemCard={itemCard} key={itemCard?.card?.info?.id} />
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
