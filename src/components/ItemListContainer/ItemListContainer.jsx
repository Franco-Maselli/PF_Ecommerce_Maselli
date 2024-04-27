import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const { categoryId } = useParams()

  useEffect(()=> {

    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
  },[categoryId])

  return (
    <div className="text-center font-bold">
      <h4>{title}</h4>
      <ItemList products={products} />
    </div>
    
  )
};

export default ItemListContainer;