import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setcategory}) => {

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="exploremenu-text">
        Choose from diverse menu featuring a delectable array of disses.Our
        mission to satisfy your cravings and elevate your dining experience,one
        delicious meal at the time.
      </p>
      <div className="exploremenu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="exploremenu-listitem">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
