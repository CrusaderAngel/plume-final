import React from 'react';
import './Cost.css';

export const Cost: React.FC = () => {
  return(
    <section id="cost">
      <h2 id="section-header">СКОЛЬКО СТОИТ</h2>
      <div className="cost-cards">
        <div className="front-cards">
          <img className="front-card-img" src="../../../public/assets/cost/virt.jpg" alt="virtual" />
          <div className="front-cards-text">
            <div className="fade-in-out-front">
              <h3 className="front-cards-title">Онлайн-занятие</h3>
              <p className="front-cards-price">2000</p>
              <br />
            </div>
            <button className="front-cards-button cost-button">подробнее</button>
          </div>

          <div className="fade-in-out-back back-cards-text">
            <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
          </div>
        </div>

        <div className="front-cards">
          <img className="front-card-img" src="../../../public/assets/cost/one.jpg" alt="virtual" />
          <div className="front-cards-text">
            <div className="fade-in-out-front">
              <h3 className="front-cards-title">Разовое занятие</h3>
              <p className="front-cards-price">3000</p>
              <br />
            </div>
            <button className="front-cards-button cost-button">подробнее</button>
          </div>

          <div className="fade-in-out-back back-cards-text">
            <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
          </div>
        </div>

        <div className="front-cards">
          <img className="front-card-img" src="../../../public/assets/cost/diagnosis.jpg" alt="virtual" />
          <div className="front-cards-text">
            <div className="fade-in-out-front">
              <h3 className="front-cards-title">Диагностика</h3>
              <p className="front-cards-price">4000</p>
              <br />
            </div>
            <button className="front-cards-button cost-button">подробнее</button>
          </div>

          <div className="fade-in-out-back back-cards-text">
            <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
          </div>
        </div>
      </div>
    </section>
  );
};