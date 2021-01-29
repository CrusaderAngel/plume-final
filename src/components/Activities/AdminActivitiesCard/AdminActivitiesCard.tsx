import React, { useState } from 'react';
import './AdminActivitiesCard.css';
import { ActivitiesData } from '../ActivitiesCard/ActivitiesCard';
import { FormEvent } from 'react';

export const AdminActivitiesCard: React.FC<ActivitiesData> = (data: ActivitiesData) => {
  const { _id, imagePath, textContent } = data;
  const [source, setSource] = useState(imagePath);
  const [text, setText] = useState(textContent);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div className="admin-activities-card-wrapper">
      <div id={_id} className="admin-activities-cell">
        <img src={imagePath} alt="" className="admin-activities-cell-image" />
        <p className="admin-activities-cell-text">{textContent}</p>
      </div>
      <form className="admin-activities-form">
        <div className="admin-activities-form-inputs">
          <textarea name="admin-activities-image-text" className="admin-activities-textarea" id={`text${_id}`} cols={30} rows={10}>{textContent}</textarea>
          <input type="text" className="admin-activities-input" placeholder="Вставьте ссылку на фото" />
        </div>
        <div className="admin-activities-form-buttons">
          <button type="submit" className="btn btn-success">Сохранить</button>
          <button type="submit" className="btn btn-danger">Удалить</button>
        </div>
      </form>
    </div>
  );
}

