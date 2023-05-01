import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.scss";
import { ProductProvaider } from "./context/ProductContext";
import { ThemeProvider } from "./context/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ProductProvaider>
        <App />
      </ProductProvaider>
    </ThemeProvider>
  </React.StrictMode>
);
