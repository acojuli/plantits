import React, { Component } from 'react';
import logo from "../../logo.svg";
import closeIcon from "../../icons/close-icon.svg";
import menuIcon from "../../icons/menu-icon.svg";
import "./NavBar.css"
//import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  };

  handleBlur = () => {
    this.setState({ active: false })
  };

  render() {
    return (
      <nav className='navbar'>
        <NavLink to={'/'}>
        <img src={logo} className="navbar__logo" alt="logo" />
        </NavLink>
        <Login />
        <CartWidget />
        <button className="icon-btn menu-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
          <img src={this.state.active ? closeIcon : menuIcon} alt="" />
        </button>
        <ul className={`navbar__menu ${this.state.active ? 'active' : ''}`} >
          <a className="navbar__link active" href="#home"> Inicio </a>
          <a className="navbar__link" href="#about-us"> Nosotros </a>
          <a className="navbar__link" href="#store"> Tienda </a>
        </ul>
      </nav>
    )
  };
}
export default NavBar;