import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, stock, img, descripcion }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      stock,
      descripcion,
    };
    setQuantity(quantity);
    addItem(item, quantity);
    console.log(`Agregaste ${quantity} unidades`);
  };

  return (
    <>
      <div className="product-details mx-auto max-w-md border rounded-lg shadow">
        <img className="rounded-t-lg" src={img} alt="Producto" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            {nombre}
          </h5>
          <p className="mb-2 font-medium tracking-tight text-black">
            {descripcion}
          </p>
          <p className="mb-3 font-bold text-black">${precio}</p>
          {quantity > 0 ? (
            <Link to="/cart" className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black bg-[#FB2E86] rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-6">Ir al carrito</Link>
          ) : (
            <ItemCount stock={5} initialValue={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
