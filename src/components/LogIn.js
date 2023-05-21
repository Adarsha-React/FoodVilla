const LogIn = () => {
  return (
    <div className="pt-6 ">
      <div>
        <input
          className="border border-1 p-4 w-full text-[10px] font-semibold focus:outline-none"
          type="text"
          name="phone"
          placeholder="Phone number"
        />
      </div>
      <div>
        <button className="bg-orange-500 text-white text-[9px] font-bold p-2 w-full mt-10 ">
          LOGIN
        </button>
        <h1 className="text-[9px]">
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </h1>
      </div>
    </div>
  );
};

export default LogIn;
