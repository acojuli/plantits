import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.svg";
import closeIcon from "../../icons/close-icon.svg";
import menuIcon from "../../icons/menu-icon.svg";
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';
import OrdersWidget from '../OrdersWidget/OrdersWidget';

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
        <OrdersWidget />
        <button className="icon-btn menu-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
          <img src={this.state.active ? closeIcon : menuIcon} alt="" />
        </button>
        <ul className={`navbar__menu ${this.state.active ? 'active' : ''}`} >
          <NavLink to={'/'} className="navbar__link " exact activeClassName="active" > Inicio </NavLink>
          <NavLink to={'/about-us'} className="navbar__link " exact> Nosotros </NavLink>
          <NavLink to={'/store'} className="navbar__link " exact> Tienda </NavLink>
        </ul>
      </nav>
    )
  };
}
export default NavBar;