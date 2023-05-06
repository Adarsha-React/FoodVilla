import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const MainContainer = ({ restaurants }) => {
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap shadow-sm bg-white m-2 p-4">
      {restaurants.map((restaurant) => (
        <div key={restaurant?.data?.id}>
          <RestaurantCard restaurant={restaurant?.data} />
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
