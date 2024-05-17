import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading] = useState(true)
    const { productId } = useParams ()
    const navigate = useNavigate ()

    useEffect (() => {
      const getProduct = async() => {

        const queryRef = doc(db, 'productos', productId)
        const response = await getDoc(queryRef)
        const newItem = {
          ...response.data(),
          id: response.id
        }
        setProducto(newItem)
        setLoading(false)
      }
      getProduct()
    }, [productId])

  return (
    <>
    {
      loading ?
      <Spinner />
      :
      <div>
      <ItemDetail {...producto} />
      </div>
    }
    </>
  )
}

export default ItemDetailContainer