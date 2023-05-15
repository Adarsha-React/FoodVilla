import searchLogo from "../assets/images/searchIcon1.png";
import { useEffect, useState } from "react";
import { SUG_SEARCH_LINK } from "../constants";
import SearchResults from "./SearchResults";

const SearchContainer = () => {
  //const restaurants = useFetchRestaurants();
  const [searchText, SetSearchText] = useState("");
  const [restaurants, SetRestaurants] = useState([]);

  const suggestSearchLink = SUG_SEARCH_LINK + searchText + "&trackingId=null";

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (searchText.trim().length > 1) {
        fetchSuggetedData();
      }
    }, 1000);
    return () => clearTimeout(timeOutID);
  }, [searchText]);

  const fetchSuggetedData = async () => {
    const data = await fetch(suggestSearchLink);
    const json = await data.json();
    SetRestaurants(json?.data?.suggestions);
    console.log(restaurants);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex w-2/5 relative justify-end">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="w-full text-xs p-2 border border-1 focus:outline-none"
            onChange={(e) => SetSearchText(e.target.value.trim())}
          />
          <img
            src={searchLogo}
            className="absolute mt-2 mr-2  w-4"
            alt="Search Icon"
          />
        </div>
      </div>
      <div>
        <SearchResults restaurants={restaurants} searchText={searchText} />
      </div>
    </div>
  );
};

export default SearchContainer;
