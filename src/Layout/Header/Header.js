import React from "react";
import CartIcon from "../../Assets/CartIcon";
import FavIcon from "../../Assets/FavIcon";
import Search from "../../Assets/Search";
import "../Header/Header.css";

function Header() {
  const width = "45px";
  return (
    <>
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="search-results">
          <input type="text" placeholder="Pesquisa"></input>
          <Search />
        </div>
        <div className="fav-and-cart">
          <FavIcon width={width} />
          <CartIcon width={width} />
        </div>
      </div>
      <div className="header-mobile">
        <div className="logo-and-fav-cart">
          <div className="logo">LOGO</div>
          <div className="fav-and-cart">
            <FavIcon width={width} />
            <CartIcon width={width} />
          </div>
        </div>
        <div className="search-results">
          <input type="text" placeholder="Pesquisa"></input>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Header;
