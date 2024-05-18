import { useContext } from "react";
import {BiCart} from "react-icons/bi";
import Context from "../../context/CartContext";

const CartWidget = () => {
  const {getQuantity} = useContext(Context)

  return (
    <div>
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-2 font-medium text-white">{getQuantity()}</span>
        <span className="sr-only"></span>
        <BiCart className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
};

export default CartWidget;
