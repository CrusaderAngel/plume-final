import React from 'react';
import './HomePage.css';
import insta from '../../img/assets/inst-logo.svg';
import whatsapp from '../../img/assets/whats-logo.svg';
import vk from '../../img/assets/vk-logo.svg';
import telega from '../../img/assets/teleg-logo.svg';

export const HomePage: React.FC = () => {
  return(
    <section id="homepage">
      <div id="homepage-content-wrapper">
        <h1 id="homepage-header">Ваш личный тренер</h1>
        <h3 id="homepage-subheader">Стретчинг. Фитнес. Йога.</h3>
        <div id="homepage-social">
          <a className="homepage-social-link-wrapper" href="">
            <img src={insta} alt="insta" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src={whatsapp} alt="whatsapp" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src={vk} alt="vk" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src={telega} alt="telega" className="homepage-social-link" id="telegram" />
          </a>
        </div>
      </div>
    </section>
  );
};