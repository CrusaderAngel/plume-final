import React from 'react';
import './Contacts.css';
import contacts from '../../img/assets/contacts.png';
import insta from '../../img/assets/inst-logo.svg';
import whatsapp from '../../img/assets/whats-logo.svg';
import vk from '../../img/assets/vk-logo.svg';
import telega from '../../img/assets/teleg-logo.svg';


export const Contacts: React.FC = () => {
  return (
    <section id="footer">
      <h2 id="section-header">КОНТАКТЫ</h2>
      <div className="contacts-container">
        <img id="contacts-img" src={contacts} alt="" />
        <div className="contacts-info-container">
          <h3 className="contacts-title">Электронный адрес</h3>
          <p className="contacts-text">gomanko.ma@gmail.com</p>

          <h3 className="contacts-title">Номер телефона</h3>
          <p className="contacts-text">+7 (977) 522-98-61</p>

          <h3 className="contacts-title">Profi.ru</h3>
          <p className="contacts-text">profi.ru/profile/GomankoMA2</p>

          <h3 className="contacts-title">Instagram</h3>
          <p className="contacts-text">@maria_gomanko</p>

          <div className="contacts-logos">
            <a href="//www.instagram.com/maria_gomanko/" target="__blank">
              <img className="footer-logos" src={insta} alt="" />
            </a>
            <a href="//wa.me/79775229861" target="__blank">
              <img className="footer-logos" src={whatsapp} alt="" />
            </a>
            <a href="//vk.com/maria_plume" target="__blank">
              <img className="footer-logos" src={vk} alt="" />
            </a>
            <a href="//telegram.im/@mariaplume" target="__blank">
              <img className="footer-logos" id="teleg-logo" src={telega} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};