import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
  <div className='bg-[#47a2db]'>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer title='Productos Destacados'/>}/>
      <Route path='/categoria/:categoryId' element={<ItemListContainer title='Productos Destacados'/>}/>
      <Route path='/producto/:productId' element={<ItemDetailContainer />}/>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
