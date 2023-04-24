import React from "react";
import { Header } from "../common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Footer } from "../common/Footer";
import { Details } from "../home/details/Details";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} cartItems={cartItems} />
          <Route path="/cart/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
