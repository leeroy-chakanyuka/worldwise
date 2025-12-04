import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.js";
import Home from "./pages/Homepage.js";
import Pricing from "./pages/Pricing.js";
import PageNotFound from "./pages/PageNotFound.js";
import AppLayout from "./pages/AppLayout.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
