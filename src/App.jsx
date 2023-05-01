import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "react-use-cart";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";
import './i18/i18next'
import ClassComponent from "./components/Login";
const App = () => {

  const [mode] = useContext(ThemeContext);


  useEffect(()=>{
    document.querySelector('body').className = mode;
  })
  return (
    <div >
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
        <CartProvider>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/" element={<ClassComponent />}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
