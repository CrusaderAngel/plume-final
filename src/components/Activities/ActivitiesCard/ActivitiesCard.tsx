import React from 'react';
import './ActivitiesCard.css';

export type ActivitiesData = {
  _id?: string;
  imagePath?: string;
  textContent?: string;
};

export const ActivitiesCard: React.FC<ActivitiesData> = (data: ActivitiesData) => {

  const { _id, imagePath, textContent } = data;

  return (
    <div id={_id} className="activities-cell">
      <img src={imagePath} alt="" className="activities-cell-image" />
      <p className="activities-cell-text">{textContent}</p>
    </div>
  );
};