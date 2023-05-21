import { useSelector } from "react-redux";
import emptyCartImg from "../assets/images/emptyCart.png";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const resInfo = useSelector((store) => store?.resInfo?.restaurantInfo);
  // console.log(cartItems);
  console.log(resInfo);

  return cartItems.length === 0 ? (
    <div className="flex justify-center pt-10">
      <div>
        <img src={emptyCartImg} className="w-56" />
        <h1 className="text-9x font-bold">Your cart is empty</h1>
      </div>
    </div>
  ) : (
    <>
      <div className="flex justify-center w-4/6 ml-44">
        <div className="shadow-sm w-3/5 bg-slate-100 m-2">
          <h1>Address Information</h1>
        </div>
        <div className="shadow-sm w-1/3 bg-slate-100">
          {cartItems.map((item) => (
            <div key={item?.id}>
              <h1>{}</h1>
              <h1>{item?.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
