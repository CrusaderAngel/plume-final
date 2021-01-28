import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../img/assets/logo.svg';
import insta from '../../img/assets/inst-logo.svg';
import whatsapp from '../../img/assets/whats-logo.svg';
import vk from '../../img/assets/vk-logo.svg';
import telega from '../../img/assets/teleg-logo.svg';

export const Navbar: React.FC<any> = (props) => {
  const [hidden, setHidden] = useState('hidden');



  const handleClick = () => {
    props.switchBlurred();
    if (hidden === '') {
      setHidden("hidden")
    } else {
      setHidden('');
    }
  }


  return (
    <>
      <nav id="navbar">
        <img src={logo} alt="" id="navbar-logo" />
        <div id="nabvar-links-row">
          <a href="#about" className="navbar-link">Кто такая</a>
          <a href="#use" className="navbar-link">Чем полезна</a>
          <a href="#hook" className="navbar-link">В чем фишка</a>
          <a href="#workflow" className="navbar-link">Как проходит </a>
          <a href="#cost" className="navbar-link">Стоимость</a>
          <a href="#FAQ" className="navbar-link">Вопросы</a>
          <a href="#footer" className="navbar-link">Контакты</a>
          <a href="#feedback" className="navbar-link">Отзывы</a>
        </div>
      </nav >

      <div className={`${props.desktopSidebarToggle} burger-wrapper`} onClick={() => handleClick()}>
        <span className="iconify" id="burger-button" data-icon="cil:hamburger-menu" data-inline="false" style={{ color: "#fff" }}></span>
      </div>

      <div className={`${hidden} sidebar`}>
        <img src={logo} alt="" id="sidebar-logo" />
        <a href="#about" className="sidebar-link" onClick={() => handleClick()}>Кто такая</a>
        <a href="#use" className="sidebar-link" onClick={() => handleClick()}>Чем полезна</a>
        <a href="#hook" className="sidebar-link" onClick={() => handleClick()}>В чем фишка</a>
        <a href="#workflow" className="sidebar-link" onClick={() => handleClick()}>Как проходит </a>
        <a href="#cost" className="sidebar-link" onClick={() => handleClick()}>Стоимость</a>
        <a href="#FAQ" className="sidebar-link" onClick={() => handleClick()}>Вопросы</a>
        <a href="#footer" className="sidebar-link" onClick={() => handleClick()}>Контакты</a>
        <a href="#feedback" className="sidebar-link" onClick={() => handleClick()}>Отзывы</a>
        <div id="social-links-wrapper">
          <a className="sidebar-social-link-wrapper" href="//www.instagram.com/maria_gomanko/" target="__blank">
            <img src={insta} alt="insta" className="sidebar-social-link" />
          </a>
          <a className="sidebar-social-link-wrapper" href="//wa.me/79775229861" target="__blank">
            <img src={whatsapp} alt="whatsapp" className="sidebar-social-link" />
          </a>
          <a className="sidebar-social-link-wrapper" href="//vk.com/maria_plume" target="__blank">
            <img src={vk} alt="vk" className="sidebar-social-link" />
          </a>
          <a className="sidebar-social-link-wrapper" href="//telegram.im/@mariaplume" target="__blank">
            <img src={telega} alt="telega" className="sidebar-social-link" id="telegram-social" />
          </a>
        </div>
      </div>
    </>
  );
};