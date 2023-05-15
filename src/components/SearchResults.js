import { SEARCH_RES_IMG_CDN } from "../constants";

const SearchResults = ({ restaurants, searchText }) => {
  if (searchText.length <= 1) {
    restaurants.length = 0;
  }
  // console.log(restaurants);

  return (
    <div className="pt-5">
      {restaurants
        .filter((restaurant) => {
          return searchText.toLowerCase() === " "
            ? restaurant
            : restaurant?.text.toLowerCase().includes(searchText);
        })
        .map((restaurant) => (
          <div key={restaurant.text} className="">
            <div className="flex flex-col items-center">
              <div className="flex w-2/5 relative cursor-pointer hover:bg-slate-100 py-2">
                <img
                  className="mr-3 w-10 rounded-md"
                  src={SEARCH_RES_IMG_CDN + restaurant?.cloudinaryId}
                />
                <div>
                  <h1 className="text-[10px]">{restaurant?.text}</h1>
                  <h1 className="text-[9px]">{restaurant?.tagToDisplay}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
