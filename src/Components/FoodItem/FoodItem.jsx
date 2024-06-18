import {React,  useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="fooditem">
      <div className="fooditem-image-container">
        <img className="fooditem-image" src={image} alt={name} />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add Icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() =>removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Icon"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() =>addToCart(id)}
              src={assets.add_icon_green}
              alt="Add Icon"
            />
          </div>
        )}
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" /> 
        </div>
        <p className="fooditem-description">{description}</p>
        <p className="fooditem-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
