import { Link } from "react-router-dom";
import './Item.css'

const Item = ({nombre, img, precio, id}) => {
  return (
    <div className="card shadow">
        <img className="card-img rounded-t-lg" src={img} alt="Imagen del producto" />
        <div className="card-detail">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {nombre}
          </h5>
        <p className="mb-3 font-bold">${precio}</p>
        <Link to={`/producto/${id}`}
          className="card-btn inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black rounded-lg  focus:ring-4 focus:outline-none ">
          Ver detalles
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        </div>
    </div>
  );
};

export default Item;
