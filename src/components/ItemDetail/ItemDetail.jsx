import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from 'react-router-dom';



const ItemDetail = ({id, nombre, precio, stock, img}) => {
  const [ quantity, setQuantity] = useState(0)
  const { addItem } = useContext(Context)

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      stock
    }
    setQuantity(quantity)
    addItem(item, quantity)
    console.log(`Agregaste ${quantity} unidades`)
  }

  return (
  <>
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={img} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
          {nombre}
        </h5>
      </a>
      <p className="mb-3 font-normal text-black">${precio}</p>
      {
        quantity > 0 ?
        <Link to='/cart'>Ir al carrito</Link>
        :
      <ItemCount stock={5} initialValue={1} onAdd={onAdd} />
      }
    </div>
    </div>
  </>
  );
};

export default ItemDetail;
