import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import ProductPage from './routes/ProductPage'
import { products } from './db/product'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product/:pid' element={<ProductPage products={products}/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
