import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/HomePage'
import { BrowserRouter, Navigate, replace, Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import ProductPage from './routes/ProductPage'
import { products } from './db/product'
import ProductsPage from './routes/ProductsPage'
import Footer from './components/Footer'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import AuthPage from './routes/AuthPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductsPage/>}/>
        <Route path='/product/:pid' element={<ProductPage products={products}/>}/>
        <Route path='/auth' element={<AuthPage/>}>
          <Route index element={<Navigate to={"/auth/login"} replace/>}/>
          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route path='/auth/register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
