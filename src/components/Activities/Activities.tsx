import React from 'react';
import './Activities.css';
import edema from '../../img/assets/activities/otek.jpg';
import stretch from '../../img/assets/activities/stretch.png';
import posture from '../../img/assets/activities/posture.png';
import hike from '../../img/assets/activities/hike.png';
import muscles from '../../img/assets/activities/muscles.png';
import birch from '../../img/assets/activities/berezka.jpg';

export const Activities: React.FC = () => {
  return(
    <section id="activities">
      <h2 id="section-header">С ЧЕМ ПОМОГАЮ</h2>
      <div id="activities-wrapper">
        <div className="activities-cell">
          <img src={edema} alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Снять отеки</p>
        </div>
        <div className="activities-cell">
          <img src={stretch} alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Улучшить растяжку</p>
        </div>
        <div className="activities-cell">
          <img src={posture} alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Исправить осанку</p>
        </div>
        <div className="activities-cell">
          <img src={hike} alt="" className="activities-cell-image" />
          <p className="activities-cell-text" id="hike">
            Подготовиться<br />к походу
          </p>
        </div>
        <div className="activities-cell">
          <img src={muscles} alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Укрепить мышцы</p>
        </div>
        <div className="activities-cell">
        <img src={birch} alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Снять боли в спине</p>
        </div>
      </div>
    </section>
  );
};