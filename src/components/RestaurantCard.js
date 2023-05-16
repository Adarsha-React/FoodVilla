import { IMAGE_CDN_LINK } from "../constants";

const RestaurantCard = ({ restaurant }) => {
  //console.log(restaurant);
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = restaurant;
  //console.log(IMAGE_CDN_LINK + cloudinaryImageId);
  return (
    <div className="w-52 h-64 shadow-sm hover:shadow-md hover:border border-1 cursor-pointer p-4 m-2">
      <img
        src={IMAGE_CDN_LINK + cloudinaryImageId}
        alt="resImage"
        className="rounded-md"
      />
      <h1 className="font-bold text-sm pt-1">{name}</h1>
      <h1 className="font-semibold text-[8px] pt-1">{cuisines.join(" ")}</h1>

      <div className="flex mt-5">
        <div>
          <span className="font-extrabold text-white font-sans text-[7px]  bg-green-400 w-10 p-[2px] px-1">
            ⭐ {avgRating}
          </span>
          <span className="px-1">-</span>
        </div>
        <div>
          <span className="font-semibold text-[7px] px-1 pb-2">
            {deliveryTime} MINS
          </span>
          <span className="">-</span>
        </div>
        <div>
          <span className="font-semibold text-[7px] px-2 pb-2">
            ₹{costForTwo / 100} FOR TWO
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
