import React from 'react';
import './Activities.css';

export const Activities: React.FC = () => {
  return(
    <section id="activities">
      <h2 id="section-header">С ЧЕМ ПОМОГАЮ</h2>
      <div id="activities-wrapper">
        <div className="activities-cell">
          <img src="../../img/assets/activities/otek.jpg" alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Снять отеки</p>
        </div>
        <div className="activities-cell">
          <img src="../../img/assets/activities/stretch.png" alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Улучшить растяжку</p>
        </div>
        <div className="activities-cell">
          <img src="../../img/assets/activities/posture.png" alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Исправить осанку</p>
        </div>
        <div className="activities-cell">
          <img src="../../img/assets/activities/hike.png" alt="" className="activities-cell-image" />
          <p className="activities-cell-text" id="hike">
            Подготовиться<br />к походу
          </p>
        </div>
        <div className="activities-cell">
          <img src="../../img/assets/activities/muscles.png" alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Укрепить мышцы</p>
        </div>
        <div className="activities-cell">
          <img src="../../img/assets/activities/berezka.jpg" alt="" className="activities-cell-image" />
          <p className="activities-cell-text">Снять боли в спине</p>
        </div>
      </div>
    </section>
  );
};