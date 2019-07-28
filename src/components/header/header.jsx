import React from 'react';
import './header.css';

const Header = () => (
  <div className="header d-flex">
    <h1>
      <a href="#" className="header__link header__title-link">StarWars DB</a>
    </h1>
    <ul className="d-flex">
      <li className="header__links-list-item"><a href="#"className="header__link header__links-link">People</a></li>
      <li className="header__links-list-item"><a href="#"className="header__link header__links-link">Planets</a></li>
      <li className="header__links-list-item"><a href="#"className="header__link header__links-link">Starships</a></li>
    </ul>
  </div>
);

export default Header;
