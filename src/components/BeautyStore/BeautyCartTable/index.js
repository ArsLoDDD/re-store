import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  beautyDeleteFromCart,
  beautyRemCountItemsToCart,
  beautyAddedToCart,
} from "../../../actions";
import "./BeautyCartTable.css";
import { connect } from "react-redux";
const BeautyCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  let countTotal = 0;

  const renderRow = (item, idx) => {
    const { title, count, total, id } = item;
    countTotal += total;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <AddCircleIcon
            onClick={() => onIncrease(id)}
            sx={{ color: "green" }}
            fontSize="large"
          />
          <RemoveCircleIcon
            onClick={() => onDecrease(id)}
            sx={{ color: "red" }}
            fontSize="large"
          />
          <DeleteForeverIcon
            onClick={() => onDelete(id)}
            sx={{ color: "orange" }}
            fontSize="large"
          />
        </td>
      </tr>
    );
  };
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
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: {countTotal}$</div>
    </div>
  );
};

const mapStateToProps = ({ cartItem, orderTotal }) => {
  return {
    items: cartItem,
    total: orderTotal,
  };
};
const mapDispatchToProps = {
  onIncrease: beautyAddedToCart,
  onDecrease: beautyRemCountItemsToCart,
  onDelete: beautyDeleteFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(BeautyCartTable);
