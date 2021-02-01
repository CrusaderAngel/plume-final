import React, { useState } from 'react';
import { BubbleData } from '../FeedbackBubbleElement/FeedbackBubbleElement';
import './AdminFeedbackBubbleElement.css'


export const AdminFeedbackBubbleElement: React.FC<BubbleData> = (props: BubbleData) => {
  const { _id, imagePath, columnId } = props;
  const [newImage, setImage] = useState(imagePath);

  return (
    <div className="admin-bubble-img" data-row={columnId}>
      <img className="admin-bubble-img-content" id={_id} src={newImage} alt="feedback-img" />
      <input type="text" className="admin-bubble-img-input" placeholder="Ссылка на изображение" onChange={event => setImage(event.target.value)} />
      <div className="admin-bubble-img-buttons-wrapper">
        <div className="btn btn-success admin-bubble-img-button">Сохранить</div>
        <div className="btn btn-danger admin-bubble-img-button">Удалить</div>
      </div>
    </div>
  );
}