import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./BeautyHeader.css";
import { Link } from "react-router-dom";

const BeautyHeader = ({ numItems, total }) => {
  return (
    <header className="header">
      <Link to="/" className="logo text-dark">
        Kera Violet
      </Link>
      <Link to="/cart">
        <ShoppingCartIcon fontSize="large" sx={{ color: "red" }} />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default BeautyHeader;
