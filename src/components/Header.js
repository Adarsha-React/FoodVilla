import AppLogo from "../assets/images/Foodvilla.png";

const Title = () => {
  return (
    <div>
      <img src={AppLogo} alt="appLogo" className="w-20 h-12 cursor-pointer" />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between m-2 p-2 shadow-lg">
      <Title />
      <div>
        <input
          className=" border border-1 w-80 rounded-lg px-2 py-1"
          type="text"
          placeholder="Search"
        />
        <button className="font-bold px-3 py-1 m-2 bg-slate-500 rounded-md text-sm text-white">
          Search
        </button>
      </div>
      <div>
        <ul className="flex">
          <li className="px-7">Help</li>
          <li className="px-7">Sign In</li>
          <li className="px-7">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
