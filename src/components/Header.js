import AppLogo from "../assets/images/Foodvilla.png";
import AppLogo1 from "../assets/images/deliveryQube.jpg";
import LoginImg from "../assets/images/login.png";
import HelpImg from "../assets/images/help.png";
import SearchImg from "../assets/images/searchIcon.png";
import searchLogo from "../assets/images/searchIcon1.png";
import { useState } from "react";
import useFetchRestaurants from "../utilities/useFetchRestaurants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          src={AppLogo1}
          alt="appLogo"
          className="w-18 h-12 cursor-pointer bg-slate-50"
        />
      </a>
    </div>
  );
};

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const cartItems = useSelector((store) => store.cart.items);

  const restaurantsInfo = useFetchRestaurants();
  function filterRestaurants(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="phxadar">
      <div className="grid grid-flow-col justify-around shadow-md bg-white h-14">
        <Title />
        <div>
          <ul className="flex py-2">
            <li className="flex px-7">
              <img src={SearchImg} alt="searchImage" className="w-7 py-2" />
              <button
                className="cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600"
                onClick={() =>
                  filterRestaurants(searchText, restaurantsInfo.restaurants)
                }
              >
                <Link to="/searchPage">Search</Link>
              </button>
            </li>
            <li className="flex px-7 py-2 pt-3 cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600">
              <img src={HelpImg} className="w-5 h-5 mx-2" />
              <Link to="/support"> Help </Link>
            </li>
            <li className="flex cursor-pointer pt-3 hover:text-orange-300 px-7 font-semibold text-xs text-slate-600">
              <img src={LoginImg} className="w-4 h-5 mx-2" />
              <Link to="/logInForm">Sign In </Link>
            </li>
            <li className="px-7 pt-3 cursor-pointer hover:text-orange-300 font-semibold text-xs text-slate-600">
              <Link to="/cart">
                <span className="bg-green-600 px-1.5 text-[9px] text-white rounded-t-sm hover:bg-orange-500">
                  {cartItems.length}
                </span>
                {"  "}
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
