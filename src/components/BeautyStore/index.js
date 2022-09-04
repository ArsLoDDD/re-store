import React from "react";
import { Route, Routes } from "react-router-dom";
import BeautyHeader from "./BeautyHeader";

import CartPage from "../../pages/cartPage";
import HomePage from "../../pages/homePage";

const BeautyStore = () => {
  return (
    <main role="main" className="container">
      <BeautyHeader numItems={5} total={50}/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default BeautyStore;
