import React, { useState } from 'react';
import './AdminActivitiesCard.css';
import { ActivitiesData } from '../ActivitiesCard/ActivitiesCard';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteActivitiesComponentData, sendActivitiesComponentData } from '../../../redux/actions/activitiesActions';

export const AdminActivitiesCard: React.FC<ActivitiesData> = (data: ActivitiesData) => {
  const dispatch = useDispatch();
  const { _id, imagePath, textContent } = data;
  const [source, setSource] = useState(imagePath);
  const [text, setText] = useState(textContent);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(sendActivitiesComponentData(_id, source, text));
  }

  const deleteHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(deleteActivitiesComponentData(_id));
  }


  return (
    <div className="admin-card-wrapper">
      <div id={_id} className="admin-activities-cell">
        <img src={source} alt="" className="admin-activities-cell-image" />
        <p className="admin-activities-cell-text">{text}</p>
      </div>
      <form className="admin-activities-form">
        <div className="admin-activities-form-inputs">
          <textarea name="admin-activities-image-text" className="admin-activities-textarea"
            id={`text${_id}`}
            cols={30}
            rows={10}
            onChange={(e) => setText(e.target.value)}>{text}</textarea>
          <input type="text" className="admin-activities-input" placeholder="Вставьте ссылку на фото" onChange={(e) => setSource(e.target.value)} />
        </div>
        <div className="admin-activities-form-buttons">
          <button type="submit" className="btn btn-success" onClick={event => submitHandler(event)}>Сохранить</button>
          <button type="submit" className="btn btn-danger" onClick={(event) => deleteHandler(event)}>Удалить</button>
        </div>
      </form>
    </div>
  );
}

