import { ITEM_CDN_LINK } from "../constants";

const MenuItem = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="flex justify-between w-5/6 py-5">
        <div className="">
          <h1 className="font-semibold text-[9px]">{item?.name}</h1>
          <h1 className="text-[9px]"> ₹{item?.price / 100}</h1>
          <h1 className="text-slate-400 text-[9px] w-3/4">
            {item?.description}
          </h1>
        </div>
        <div className="relative px-2">
          <div className="relative overflow-hidden">
            <img
              className="w-20 h-16 rounded-md"
              src={ITEM_CDN_LINK + item?.imageId}
              alt="itemImg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <button className="text-[7px] font-bold px-7 py-2 rounded-md  text-green-600 bg-slate-100 absolute -bottom-0.5 left-1/2 -translate-x-1/2 -translate-y-1/">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-5/6 h-px bg-gray-300 border-0"></hr>
      {/* <hr className="w-5/6 ml-4 h-px bg-gray-300 border-0 "></hr> */}
    </>
  );
};

export default MenuItem;
