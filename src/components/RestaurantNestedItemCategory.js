import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  // console.log(nestedCategory);
  //console.log(nestedCategory?.title);
  return (
    <div className="">
      <h1 className="font-bold text-xs ml-80 p-2">{nestedCategory?.title}</h1>
      {nestedCategory?.categories?.map((category, index) => (
        <div key={index}>
          <RestaurantItemCategory itemCategory={category} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantNestedItemCategory;
