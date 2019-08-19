import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="header d-flex">
    <h1 className="header__title">
      <Link to='/' className="header__link header__title-link">StarWars DB</Link>
    </h1>
    <ul className="d-flex header__links-list">
      <li className="header__links-list-item"><Link to="peoples" className="header__link header__links-link">People</Link></li>
      <li className="header__links-list-item"><Link to="planets" className="header__link header__links-link">Planets</Link></li>
      <li className="header__links-list-item"><Link to="starships" className="header__link header__links-link">Starships</Link></li>
    </ul>
  </div>
);

export default Header;
