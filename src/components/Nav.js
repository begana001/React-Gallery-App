import React from 'react';
import { NavLink } from 'react-router-dom';

//3 fixed topic for Navlinks 
const Nav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/river" activeStyle={{ background: "tomato" }}>river</NavLink></li>
          <li><NavLink to="/mountain" activeStyle={{ background: "tomato" }}>Mountain</NavLink></li>
          <li><NavLink to="/ocean" activeStyle={{ background: "tomato" }}>Ocean</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;