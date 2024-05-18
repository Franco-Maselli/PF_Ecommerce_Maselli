import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=> {
    setLoading(true)
    const getData = async () =>{
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ?
      coleccion
      :
      query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }
    getData()
  },[categoryId])

  return (
    <div className="text-center">
      <h2 className="font-bold text-black text-2xl mt-4">{title}</h2>
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