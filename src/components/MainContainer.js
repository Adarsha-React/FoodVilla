import RestaurantCard from "./RestaurantCard";

const MainContainer = () => {
  return (
    <div className="flex flex-wrap shadow-sm bg-white m-2 p-4">
      {Array(10).fill(<RestaurantCard />)}
    </div>
  );
};

export default MainContainer;
