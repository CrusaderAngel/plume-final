import React from 'react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return(
    <section id="homepage">
      <div id="homepage-content-wrapper">
        <h1 id="homepage-header">Ваш личный тренер</h1>
        <h3 id="homepage-subheader">Стретчинг. Фитнес. Йога.</h3>
        <div id="homepage-social">
          <a className="homepage-social-link-wrapper" href="">
            <img src="./assets/inst-logo.svg" alt="insta" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src="./assets/whats-logo.svg" alt="whatsapp" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src="./assets/vk-logo.svg" alt="vk" className="homepage-social-link" />
          </a>
          <a className="homepage-social-link-wrapper" href="">
            <img src="./assets/teleg-logo.svg" alt="telega" className="homepage-social-link" id="telegram" />
          </a>
        </div>
      </div>
    </section>
  );
};