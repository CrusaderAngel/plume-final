import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFeedbackComponentData, sendFeedbackComponentData } from '../../../redux/actions/feedbackActions';
import { BubbleData } from '../FeedbackBubbleElement/FeedbackBubbleElement';
import './AdminFeedbackBubbleElement.css'


export const AdminFeedbackBubbleElement: React.FC<BubbleData> = (props: BubbleData) => {
  const dispatch = useDispatch();
  const { _id, imagePath, columnId } = props;
  const [newImage, setImage] = useState(imagePath);

  const submitHandler = () => {
    dispatch(sendFeedbackComponentData(_id, newImage, columnId));
  }

  const deleteHandler = () => {
    dispatch(deleteFeedbackComponentData(_id));
  }

  return (
    <div className="admin-bubble-img" data-row={columnId}>
      <img className="admin-bubble-img-content" id={_id} src={newImage} alt="feedback-img" />
      <input type="text" className="admin-bubble-img-input" placeholder="Ссылка на изображение" onChange={event => setImage(event.target.value)} />
      <div className="admin-bubble-img-buttons-wrapper">
        <div className="btn btn-success admin-bubble-img-button" onClick={() => submitHandler()}> Сохранить </div>
        <div className="btn btn-danger admin-bubble-img-button" onClick={() => deleteHandler()}> Удалить</div>
      </div>
    </div>
  );
}