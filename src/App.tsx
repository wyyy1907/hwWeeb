import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import SolutionDetail from "@/pages/SolutionDetail";
import TechnicalSupport from "@/pages/TechnicalSupport";
import TrainingCertification from "@/pages/TrainingCertification";
import AboutUs from "@/pages/AboutUs";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/solution/:id" element={<SolutionDetail />} />
        <Route path="/technical-support" element={<TechnicalSupport />} />
        <Route path="/training-certification" element={<TrainingCertification />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </AuthContext.Provider>
  );
}
