import React from 'react';
import { BubbleData } from '../FeedbackBubbleElement/FeedbackBubbleElement';
import './AdminFeedbackBubbleElement.css'


export const AdminFeedbackBubbleElement: React.FC<BubbleData> = (props: BubbleData) => {

  const { _id, imagePath, columnId } = props;
  return (
    <div className="admin-bubble-img" data-row={columnId}>
      <img className="admin-bubble-img-content" id={_id} src={imagePath} alt="feedback-img" />
    </div>
  );
}