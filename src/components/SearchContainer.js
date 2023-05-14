import searchLogo from "../assets/images/searchIcon1.png";
import { useEffect, useState } from "react";
import { PreSearchData } from "../utilities/helper";
import useFetchRestaurants from "../utilities/useFetchRestaurants";
import SpinShimmer from "./SpinShimmer";
import { SUG_SEARCH_LINK } from "../constants";

const SearchContainer = () => {
  const restaurants = useFetchRestaurants();
  let [searchText, SetSearchText] = useState("");
  const suggestSearchLink = SUG_SEARCH_LINK + searchText + "&trackingId=null";

  let lastSearchText = searchText;

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (searchText.trim()) {
        fetchSuggetedData();
      }
    }, 1000);
    return () => clearTimeout(timeOutID);
  }, [searchText]);

  const fetchSuggetedData = async () => {
    const data = await fetch(suggestSearchLink);
    const json = await data.json();
    console.log(json?.data);
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
            b
            className="absolute mt-2 mr-2  w-4"
            alt="Search Icon"
          />
        </div>
      </div>
      <div>
        {restaurants
          .filter((restaurant) => {
            return searchText.toLowerCase() === " "
              ? restaurant
              : restaurant?.data?.name.toLowerCase().includes(searchText);
          })
          .map((restaurant) => (
            <div key={restaurant?.data?.id} className="">
              <div className="flex flex-col w-4/5 pt-5 items-center">
                <div className="shadow-sm p-2 bg-slate-50 m-2 w-1/4">
                  <h1 className="text-xs font-semibold">
                    {restaurant?.data?.name}
                  </h1>
                  <h1 className="text-[9px]">
                    {restaurant?.data?.cuisines?.join(", ")}
                  </h1>
                  <h1 className="text-[9px] pt-2">
                    {restaurant?.data?.area}, {restaurant?.data?.slugs?.city}
                  </h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchContainer;
