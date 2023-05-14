import { ITEM_CDN_LINK } from "../constants";

const ItemCard = ({ itemCard }) => {
  return (
    <>
      <div className="pt-5 flex justify-between shadow-sm pb-2 w-4/5">
        <div className="w-3/4">
          <h1 className="font-semibold text-xs">
            {itemCard?.card?.info?.name}
          </h1>
          <h1 className="text-[9px]"> ₹{itemCard?.card?.info?.price / 100}</h1>
          <h1 className="text-slate-400 text-[9px]">
            {itemCard?.card?.info?.description}
          </h1>
        </div>
        <div className="relative px-2">
          <div className="relative overflow-hidden">
            <img
              className="w-24 h-20 rounded-md"
              src={ITEM_CDN_LINK + itemCard?.card?.info?.imageId}
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

      {/* <hr className="w-5/6 ml-4 h-px bg-gray-300 border-0 "></hr> */}
    </>
  );
};

export default ItemCard;
