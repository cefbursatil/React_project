import React from 'react'
import './Navbar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
const navbar = ({items,setSearch}) => {
    // console.log(items)
    return (
        <div id="header">
        <nav className="navbar navbar-expand-lg navbar-dark siteCenter">
              <Link to="/"className="header__logo"> 
              <div>
                             
              </div>
              </Link>
          
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input

              onChange = {(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
            <div id="header__call-action" className="navbar-text">
              <a href="https://www.mql5.com/en/market/product/65466">Try the EA
              </a>
            </div>
            <div>
                <CartWidget items={items}/>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default navbar
