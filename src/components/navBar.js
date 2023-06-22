import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa6';

const NavBar = () => (
  <nav className="navBar">
    <h1>Bookstore CMS</h1>
    <ul className="navUl">
      <li className="naveLi">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="naveLi">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color"><FaRegUser /></span>
    </button>
  </nav>
);

export default NavBar;
