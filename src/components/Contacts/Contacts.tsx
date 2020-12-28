import React from 'react';
import './Contacts.css';

export const Contacts: React.FC = () => {
  return(
    <section id="footer">
      <h2 id="section-header">КОНТАКТЫ</h2>
      <div className="contacts-container">
        <img id="contacts-img" src="../../img/assets/contacts.png" alt="" />
        <div className="contacts-info-container">
          <h3 className="contacts-title">Электронный адрес</h3>
          <p className="contacts-text">gomanko.ma@gmail.com</p>

          <h3 className="contacts-title">Номер телефона</h3>
          <p className="contacts-text">+7 (977) 522-98-61</p>

          <h3 className="contacts-title">Profi.ru</h3>
          <p className="contacts-text">https://profi.ru/profile/GomankoMA2</p>

          <h3 className="contacts-title">Instagram</h3>
          <p className="contacts-text">@maria_gomanko</p>

          <div className="contacts-logos">
            <img className="footer-logos" src="../../img/assets/inst-logo.svg" alt="" />
            <img className="footer-logos" src="../../img/assets/whats-logo.svg" alt="" />
            <img className="footer-logos" src="../../img/assets/vk-logo.svg" alt="" />
            <img className="footer-logos" id="teleg-logo" src="../../img/assets/teleg-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};