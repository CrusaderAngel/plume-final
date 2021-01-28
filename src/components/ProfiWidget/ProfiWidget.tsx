import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRatingComponentsData } from '../../redux/actions/ratingActions';
import './ProfiWidget.css';
import star from '../../img/assets/widget/profi.ru/star.svg';
import plus from '../../img/assets/widget/profi.ru/plus.svg'

interface Props {
  star?: number,
  reviews?: number
};

export const ProfiWidget: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const ratingComponentsData = useSelector((state: any) => state.ratingComponentsData);
  const { loading, data } = ratingComponentsData;

  useEffect(() => {
    dispatch(fetchAllRatingComponentsData());
  }, [dispatch]
  );


  if (loading) {
    return (null);
  } else {
    return (
      <div className="profi-widget-container">
        <div className="profi-widget">
          <div className="widget-title">Отзывы учеников на PROFI.RU</div>
          <div className="widget-content">
            <button className="widget-button">
              <a target="_blank" rel="noreferrer" href="https://profi.ru/profile/GomankoMA2">Смотреть</a>
            </button>
            <div className="widget-content-general">
              <div className="widget-content-text">
                <img className="widget-icons" src={star} alt="" />
                <span id="star-text">{data.rating}</span>
              </div>
              <div className="widget-content-text">
                <img className="widget-icons" src={plus} alt="" />
                <span id="mark-text">Отзывов: {data.reviews}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};