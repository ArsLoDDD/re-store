import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "./BeautyCartTable.css";
const BeautyCartTable = () => {
  return (
    <div className="beauty-cart-table">
      <h2>Order</h2>
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>Item</td>
            <td>Count</td>
            <td>Price</td>
            <td>
              <AddCircleIcon sx={{ color: "green" }} fontSize="large" />
              <RemoveCircleIcon sx={{ color: "red" }} fontSize="large" />
              <DeleteForeverIcon sx={{ color: "orange" }} fontSize="large" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        <span>total</span>
      </div>
    </div>
  );
};

export default BeautyCartTable;
