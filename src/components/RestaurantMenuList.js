import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";

const RestaurantMenuList = ({ menu }) => {
  //console.log(menu);
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
