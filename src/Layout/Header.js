import React from "react";
import CartIcon from "../Assets/CartIcon";
import FavIcon from "../Assets/FavIcon";
import "../Layout/Header.css";

function Header() {
  const width = "35px";
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="search-results">
        <input type="text" placeholder="Pesquisa"></input>
      </div>
      <div className="fav-and-cart">
        <FavIcon width={width} />
        <CartIcon width={width} />
      </div>
    </div>
  );
}

export default Header;
