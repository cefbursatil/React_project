import React from 'react'
import './Navbar.scss';
import CartWidget from '../CartWidget/CartWidget';
const navbar = () => {
    return (
        <div id="header">
        <nav className="navbar navbar-expand-lg navbar-dark siteCenter">
          <div className="header__logo" onclick="location.href='index.html';"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav header__menu">
              <a href="#value" class="nav-item nav-link">Value Proposition</a>
              <a href="#performance" class="nav-item nav-link">Performance</a>
              <a href="#how" class="nav-item nav-link">How It Works</a>
              <a href="#community" class="nav-item nav-link">Community</a>
            </div>
            <div id="header__call-action" class="navbar-text">
              <a href="https://www.mql5.com/en/market/product/65466">Try the EA
              </a>
            </div>
            <div>
                <CartWidget/>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default navbar
