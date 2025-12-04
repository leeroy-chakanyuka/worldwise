import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="home" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
