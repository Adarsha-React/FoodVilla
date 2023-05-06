import { IMAGE_CDN_LINK } from "../constants";

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant);
  const { name, cuisines, costForTwo, totalRatings, cloudinaryImageId } =
    restaurant;
  //console.log(IMAGE_CDN_LINK + cloudinaryImageId);
  return (
    <div className="w-52 h-64 shadow-sm hover:shadow-md hover:border border-1 cursor-pointer p-2 ml-[70px] mt-3">
      <img src={IMAGE_CDN_LINK + cloudinaryImageId} alt="resImage" />
      <h1 className="font-bold text-sm pt-1">{name}</h1>
      <h1 className="font-semibold text-[8px] pt-1">{cuisines.join(" ")}</h1>
      <h1 className="font-semibold text-[10px] pt-1">
        Cost for Two: {costForTwo / 200}
      </h1>
      <h1 className="font-semibold text-[10px] pt-1">
        Ratings {totalRatings} stars
      </h1>
    </div>
  );
};

export default RestaurantCard;
