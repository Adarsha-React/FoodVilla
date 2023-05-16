import { IMG_FEE_INFO_CDN } from "../constants";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <div>
      <div className="pt-5 flex justify-evenly pb-5">
        <div className="">
          <h1 className="font-semibold text-xs">{restaurant?.name}</h1>
          <h1 className="text-[9px] pt-1">{restaurant?.cuisines?.join(",")}</h1>
          <h1 className="text-[9px]">
            {restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString}
          </h1>
          <div className="flex">
            <img
              src={IMG_FEE_INFO_CDN + restaurant?.feeDetails?.icon}
              alt="feeDetail"
              className="w-3 mt-3"
            />
            <h1 className="text-[9px] mt-3 pl-2">
              {restaurant?.feeDetails?.message}
            </h1>
          </div>
        </div>
        <div className="shadow-md px-2 rounded-md bg-slate-50">
          <h1 className="text-[9px] font-bold py-2">
            ⭐{" " + restaurant?.avgRating}
          </h1>
          <hr className="w-15 h-px bg-gray-300 border-0"></hr>
          <h1 className="text-[8px] font-semibold pt-2">
            {restaurant?.totalRatingsString}
          </h1>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default RestaurantInfo;
