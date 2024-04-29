import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';


const Productos = () => {
  return (
    <div className="bg-[#47a2db]">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Productos Destacados" />}
          />
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer title="Productos Destacados" />}
          />
          <Route
            path="/producto/:productId"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Productos;
