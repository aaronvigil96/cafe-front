import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/HomePage'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'
import ProductPage from './routes/ProductPage'
import { products } from './db/product'
import ProductsPage from './routes/ProductsPage'
import Footer from './components/Footer'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import AuthPage from './routes/AuthPage'
import DashboardPage from './routes/DashboardPage'
import DashboardHomePage from './routes/DashboardHomePage'
import DashboardProductPage from './routes/DashboardProductPage';


const Layout = () => {

  const location = useLocation();
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    setHideLayout(location.pathname.startsWith('/dashboard'));
  },[location.pathname])

  return(
    <>
      {!hideLayout && <NavBar/>}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductsPage/>}/>
        <Route path='/product/:pid' element={<ProductPage products={products}/>}/>
        <Route path='/auth' element={<AuthPage/>}>
          <Route index element={<Navigate to={"/auth/login"} replace/>}/>
          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route path='/auth/register' element={<RegisterPage/>}/>
        </Route>
        <Route path='/dashboard' element={<DashboardPage/>}>
          <Route index element={<Navigate to={"/dashboard/home"} replace />} />
          <Route path='/dashboard/home' element={<DashboardHomePage/>}/>
          <Route path='/dashboard/product' element={<DashboardProductPage/>}/>
        </Route>
      </Routes>
      {!hideLayout && <Footer/>}
    </>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </StrictMode>,
)
