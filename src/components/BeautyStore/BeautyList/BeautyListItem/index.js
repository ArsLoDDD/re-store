import React from "react";
import "./BeautyListItem.css";
// import { Link } from "react-router-dom";
const BeautyListItem = ({ beauty }) => {
  const { title, description, price, image, id } = beauty;
  return (
    <div className="beauty-list-item">
      <div className="beauty-cover">
        <img src={image} alt="k" />
      </div>
      <div className="beauty-details">
        <span className="beauty-title">
          {title}
          {id}
        </span>
        <div className="beauty-desciption">{description}</div>
        <div className="beauty-price">Цена: {price}</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default BeautyListItem;
