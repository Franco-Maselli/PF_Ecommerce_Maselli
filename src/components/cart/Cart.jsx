import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, getTotal, clearCart } = useContext(Context)
  console.log("cart", cart)
if(cart.length === 0){
  return(
    <div>
      <h2>Todavia no agregaste productos</h2>
      <Link to='/'>Ver productos</Link>
    </div>
  )
}else{
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{prod.nombre}</td>
              <td className="px-6 py-4">{prod.quantity}</td>
              <td className="px-6 py-4">{prod.precio}</td>
              <td className="px-6 py-4">{prod.precio * prod.quantity}</td>
              <td className="px-6 py-4">
                <a
                onClick={() => removeItem(prod.id)}
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
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
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <th>Total: ${getTotal()}</th>
            <th>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
            </th>
            <th>
                Finalizar Compra
            </th>
        </tfoot>
      </table>
    </div>
  )
}
}

export default Cart;
