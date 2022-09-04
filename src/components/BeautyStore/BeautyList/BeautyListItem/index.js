import React from "react";
import "./BeautyListItem.css";
const BeautyListItem = ({ beauty }) => {
  const { title, description, price, image, id } = beauty;
  return (
    <div className="beauty-list-item">
      <div className="beauty-cover">
        <img src={image} alt="k" />
      </div>
      <div className="beauty-details">
        <a href="1" className="beauty-title">
          {title}{id}
        </a>
        <div className="beauty-desciption">{description}</div>
        <div className="beauty-price">Цена:  {price}</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default BeautyListItem;
