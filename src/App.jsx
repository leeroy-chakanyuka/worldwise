import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState({ cities: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        throw new Error("Data not found");
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>list of countries</p>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
