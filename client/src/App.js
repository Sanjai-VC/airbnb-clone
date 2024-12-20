import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/properties/:id" element={<PropertyDetailsPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
