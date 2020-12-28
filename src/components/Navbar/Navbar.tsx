import React from 'react';
import './Navbar.css';
import logo from '../../img/assets/logo.svg';

export const Navbar: React.FC = () => {
  return(
    <nav id="navbar">
    <img src={logo} alt="" id="navbar-logo" />
    <div id="nabvar-links-row">
      <a href="" className="navbar-link">Кто такая</a>
      <a href="" className="navbar-link">Чем полезна</a>
      <a href="" className="navbar-link">В чем фишка</a>
      <a href="" className="navbar-link">Как проходит </a>
      <a href="" className="navbar-link">Отзывы</a>
      <a href="" className="navbar-link">Стоимость</a>
      <a href="" className="navbar-link">Вопросы</a>
      <a href="" className="navbar-link">Контакты</a>
    </div>
  </nav>
  );
};