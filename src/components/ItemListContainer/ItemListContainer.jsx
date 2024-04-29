import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=> {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[categoryId])

  return (
    <div className="text-center font-bold">
      <h4>{title}</h4>
      {
        loading ?
        <Spinner />
        :
        <ItemList products={products} />
      }
    </div>
    
  )
};

export default ItemListContainer;