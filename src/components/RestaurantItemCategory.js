import { useState } from "react";
import MenuItem from "./MenuItem";
import upArrow from "../assets/images/upArrow.png";
import downArrow from "../assets/images/downArrow.png";

const RestaurantItemCategory = ({ itemCategory }) => {
  //console.log(itemCategory);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="p-2 ml-80 pt-3 w-3/5">
      <div className="flex justify-between w-4/5">
        <h1 className="font-bold text-[10px]">
          {itemCategory?.title} ({itemCategory?.itemCards?.length})
        </h1>

        {isVisible ? (
          <button onClick={() => setIsVisible(false)}>
            <img src={upArrow} alt="Up Arrow" className="w-3" />
          </button>
        ) : (
          <button onClick={() => setIsVisible(true)}>
            <img src={downArrow} alt="Down Arrow" className="w-3" />
          </button>
        )}
      </div>

      {isVisible && (
        <div className="">
          {itemCategory?.itemCards?.map((item) => (
            <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory;
