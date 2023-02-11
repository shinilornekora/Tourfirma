import React from "react";

const Header = function (props) {
  return (  
    <header className="header">
      <div className="header__container">
        <div className="header__row">
          <a href="#" className="header__logo">
            TrаvelStore
          </a>
          <a href="#" className="header__user">
            <div className="header__userName">{props.header.name} -</div>
            <div className="header__userPost">{props.header.post}</div>
          </a>
          <span className="header__userLogo"></span>
        </div>
      </div>
    </header>
  )
}

export default Header;