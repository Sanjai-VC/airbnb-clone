import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import SearchResultsPage from "./pages/SearchResultsPage"; // Added SearchResultsPage import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} /> {/* Added Route for SearchResultsPage */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
