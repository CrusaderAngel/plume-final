import React from 'react';
import './ActivitiesCard.css';
import EditForm from '../../EditForm';

export type ActivitiesData = {
  _id?:string;
  imagePath?:string;
  textContent?:string;
  editable:boolean;
};

export const ActivitiesCard: React.FC<ActivitiesData> = (data:ActivitiesData) => {

  const {_id, imagePath, textContent, editable} = data;

  const func = (arg:string|undefined) => {
    alert(arg)
  }

  if(!editable) {
    return (
      <div id={_id} className="activities-cell">
        <img src={imagePath} alt="" className="activities-cell-image" />
        <p className="activities-cell-text">{textContent}</p>
      </div>
    );
  }else{
    return (
      <>
      <div id={_id} className="activities-cell">
        <img src={imagePath} alt="" className="activities-cell-image" />
        <p className="activities-cell-text">{textContent}</p>
      </div>
      <EditForm id={_id} sendData={func}/>
      </>
    );
  }
}