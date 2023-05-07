import AppLogo from "../assets/images/Foodvilla.png";
import LoginImg from "../assets/images/login.png";
import HelpImg from "../assets/images/help.png";
import SearchImg from "../assets/images/searchIcon.png";
import { useState } from "react";
import useFetchRestaurants from "../utilities/useFetchRestaurants";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          src={AppLogo}
          alt="appLogo"
          className="w-16 h-10 m-2 cursor-pointer"
        />
      </a>
    </div>
  );
};

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const restaurants = useFetchRestaurants();
  function filterRestaurants(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="">
      <div className="grid grid-flow-col justify-around mx-2 shadow-md">
        <Title />
        <div>
          <ul className="flex py-2">
            <li className="flex px-7">
              <img src={SearchImg} alt="searchImage" className="w-7 py-2" />
              <button
                className="cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600"
                onClick={() => filterRestaurants(searchText, restaurants)}
              >
                Search
              </button>
            </li>
            <li className="flex px-7 py-2 pt-3 cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600">
              <img src={HelpImg} className="w-5 h-5 mx-2" />
              Help
            </li>
            <li className="flex cursor-pointer pt-3 hover:text-orange-300 px-7 font-semibold text-xs text-slate-600">
              <img src={LoginImg} className="w-4 h-5 mx-2" />
              Sign In
            </li>
            <li className="px-7 pt-3 cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600">
              🛒 Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
