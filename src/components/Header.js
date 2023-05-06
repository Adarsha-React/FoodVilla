import AppLogo from "../assets/images/Foodvilla.png";
import LoginImg from "../assets/images/login.png";
import HelpImg from "../assets/images/help.png";

const Title = () => {
  return (
    <div>
      <img src={AppLogo} alt="appLogo" className="w-20 h-12 cursor-pointer" />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between m-2 p-2 shadow-md">
      <Title />
      <div>
        <input
          className=" border border-1 w-80 rounded-lg px-2 py-1"
          type="text"
          placeholder="Search"
        />
        <button className="font-bold px-3 py-1 m-2 bg-slate-500 hover:bg-slate-400 rounded-md text-sm text-white">
          Search
        </button>
      </div>
      <div>
        <ul className="flex py-2">
          <li className="flex px-7 cursor-pointer hover:text-orange-300 font-semibold text-sm text-slate-600">
            <img src={HelpImg} className="w-6 mx-2" />
            Help
          </li>
          <li className="flex cursor-pointer  hover:text-orange-300 px-7 font-semibold text-sm text-slate-600">
            <img src={LoginImg} className="w-6 mx-2" />
            Sign In
          </li>
          <li className="px-7 cursor-pointer hover:text-orange-300 font-semibold text-sm text-slate-600">
            🛒 Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
