import React, { FormEvent } from 'react';
import './ActivitiesCard.css';

export type ActivitiesData = {
  _id?:string;
  imagePath?:string;
  textContent?:string;
  editable:boolean;
};

export const ActivitiesCard: React.FC<ActivitiesData> = (data:ActivitiesData) => {

  const {_id, imagePath, textContent, editable} = data;

  const submitHandler = (event:FormEvent) => {
    event.preventDefault();
    
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
      <div className="activities-card">
      <div id={_id} className="activities-cell">
        <img src={imagePath} alt="" className="activities-cell-image" />
        <p className="activities-cell-text">{textContent}</p>
      </div>
      <form className="edit-form" action="upload" method="POST" onSubmit={submitHandler}>
      <textarea name="text" className="textContent" placeholder="Новый текст" id={_id + "-input-text"}></textarea>
      <label className="image-input">
      <input type="file" name="image" className="image-input" />
      Загрузить изображение
      </label>
      <label className="submit-button">
      <button type="submit"></button>
      Отправить
      </label>
      </form>
      </div>
    );
  }
}