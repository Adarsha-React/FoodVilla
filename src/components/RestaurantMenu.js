import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  return !restaurant ? (
    <h1>Loading...Add menu shimmer effect </h1>
  ) : (
    <>
      <div className="flex flex-col">
        <RestaurantInfo restaurant={restaurant.info} />
        <RestaurantMenuList menu={restaurant.menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
