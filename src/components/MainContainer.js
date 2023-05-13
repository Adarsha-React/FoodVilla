import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const MainContainer = ({ restaurants }) => {
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-flow-col justify-center">
      <div className="grid grid-cols-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant?.data?.id}>
            <Link to={"/restaurant/" + restaurant?.data?.id}>
              <RestaurantCard restaurant={restaurant?.data} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
