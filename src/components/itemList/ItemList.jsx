import Item from "../item/Item";
import "./ItemList.css"

const ItemList = ({ products }) => {

  return (
    <div className="cardContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center">
        {products.map((elem) => (
            <div key={elem.id}>
            <Item {...elem} />
            </div>
            
        ))}
    </div>
  )
}

export default ItemList;