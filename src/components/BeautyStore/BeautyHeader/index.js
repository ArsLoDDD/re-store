import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./BeautyHeader.css";

const BeautyHeader = ({ numItems, total }) => {
  return (
    <header className="header">
      <a href="1" className="logo text-dark">
        Kera Violet
      </a>
      <a href="1">
        <ShoppingCartIcon fontSize="large" sx={{ color: "red" }} />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default BeautyHeader;
