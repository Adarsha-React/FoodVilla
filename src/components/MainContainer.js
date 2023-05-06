import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const MainContainer = ({ restaurants }) => {
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-cols-4 gap-2 w-4/5 shadow-sm bg-white ml-14">
      {restaurants.map((restaurant) => (
        <div key={restaurant?.data?.id}>
          <RestaurantCard restaurant={restaurant?.data} />
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
