import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/HomePage'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'
import ProductPage from './routes/ProductPage'
import ProductsPage from './routes/ProductsPage'
import Footer from './components/Footer'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import AuthPage from './routes/AuthPage'
import DashboardPage from './routes/DashboardPage'
import DashboardHomePage from './routes/DashboardHomePage'
import DashboardProductPage from './routes/DashboardProductPage';
import DashboardOrdersPage from './routes/DashboardOrdersPage';
import DashboardOrderPage from './routes/DashboardOrderPage';


const Layout = () => {

  const location = useLocation();
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    setHideLayout(location.pathname.startsWith('/dashboard'));
  },[location.pathname])

  return(
    <div className={`${!hideLayout ? "flex flex-col min-h-screen" : ""}`}>
      {!hideLayout && <NavBar/>}
      <div className={`${!hideLayout ? "flex-1" : ""}`}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<ProductsPage/>}/>
          <Route path='/product/:pid' element={<ProductPage/>}/>
          <Route path='/auth' element={<AuthPage/>}>
            <Route index element={<Navigate to={"/auth/login"} replace/>}/>
            <Route path='/auth/login' element={<LoginPage/>}/>
            <Route path='/auth/register' element={<RegisterPage/>}/>
          </Route>
          <Route path='/dashboard' element={<DashboardPage/>}>
            <Route index element={<Navigate to={"/dashboard/home"} replace />} />
            <Route path='/dashboard/home' element={<DashboardHomePage/>}/>
            <Route path='/dashboard/product' element={<DashboardProductPage/>}/>
            <Route path='/dashboard/order' element={<DashboardOrdersPage/>}/>
            <Route path='/dashboard/order/:id' element={<DashboardOrderPage/>}/>
          </Route>
        </Routes>
      </div>
      {!hideLayout && <Footer/>}
    </div>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </StrictMode>,
)
