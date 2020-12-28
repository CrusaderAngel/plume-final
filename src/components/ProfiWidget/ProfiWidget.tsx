import React from 'react';
import './ProfiWidget.css';


interface Props {
  star?: number,
  reviews?: number
};

export const ProfiWidget: React.FC<Props> = () => {
  return(
    <div className="profi-widget-container">
        <div className="profi-widget">
          <div className="widget-title">Отзывы учеников на PROFI.RU</div>
          <div className="widget-content">
            <button className="widget-button">
              <a target="_blank" href="https://profi.ru/profile/GomankoMA2">Смотреть</a>
            </button>
            <div className="widget-content-general">
              <div className="widget-content-text">
                <img className="widget-icons" src="../../assets/widget/profi.ru/star.svg" alt="" />
                <span id="star-text">5</span>
              </div>
              <div className="widget-content-text">
                <img className="widget-icons" src="../../assets/widget/profi.ru/plus.svg" alt="" />
                <span id="mark-text">Очень хвалят</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};