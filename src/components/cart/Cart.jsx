import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem, getTotal, clearCart } = useContext(Context);
  console.log("cart", cart);
  if (cart.length === 0) {
    return (
      <div className="container flex flex-col mx-auto items-center gap-4 mt-5">
        <h2 className="text-black font-bold text-2xl mt-4">Todavia no agregaste productos</h2>
        <Link className="btn-f text-black font-bold rounded-lg px-3 py-3" to="/">Ver productos</Link>
      </div>
    );
  } else {
    return (
      <div className="table mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className=" text-black font-bold uppercase bg-[#F6F5FF] shadow border-4 border-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr
                key={prod.id}
                className=" text-black font-bold bg-[#F6F5FF] shadow  border-4 border-black"
              >
                <td className="px-6 py-4">{prod.nombre}</td>
                <td className="px-6 py-4">{prod.quantity}</td>
                <td className="px-6 py-4">{prod.precio}</td>
                <td className="px-6 py-4">{prod.precio * prod.quantity}</td>
                <td className="px-6 py-4">
                  <Link
                    onClick={() => removeItem(prod.id)}
                    href="#"
                    className="font-bold text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container mx-auto flex flex-col items-center">
            <h2 className="h2-total text-2xl text-black font-bold">Total: ${getTotal()}</h2>
            <button className="btn-v text-black font-bold rounded-lg px-2 py-1" onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to="/checkout" className="btn-f text-black font-bold rounded-lg px-3 py-3">Finalizar Compra</Link>
          </div>
      </div>
    );
  }
};

export default Cart;
