import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddPhoto from "./pages/AddPhoto";
import ListPhoto from "./pages/ListPhoto";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/add-photo" element={<AddPhoto />} />
          <Route path="/view-photo" element={<ListPhoto />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
