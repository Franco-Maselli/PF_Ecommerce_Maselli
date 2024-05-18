import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "./ItemCount.css";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  return (
    <div className="btns flex justify-between">
      <div>
        <button
          onClick={decrementar}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black bg-[#FB2E86] rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-6"
        >
          -
        </button>
        <span className="numero text-black font-bold">{count}</span>
        <button
          onClick={incrementar}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black bg-[#FB2E86] rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-6"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black bg-[#FB2E86]  rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-6"
      >
        Agregar 🛒
      </button>
    </div>
  );
};

export default ItemCount;
