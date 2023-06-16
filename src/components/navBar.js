import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navBar">
    <h1>Bookstore CMS</h1>
    <ul className="navUl">
      <li className="naveLi">
        <Link to="/">Books</Link>
      </li>
      <li className="naveLi">
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
