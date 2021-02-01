import React from 'react';

export type BubbleData = {
  _id: string,
  imagePath: string,
  columnId: number
}

export const FeedbackBubbleElement: React.FC<BubbleData> = (props: BubbleData) => {

  const { _id, imagePath, columnId } = props;
  return (
    <div className="bubble-img" data-row={columnId}>
      <img className="bubble-img-content" id={_id} src={imagePath} alt="feedback-img" />
    </div>
  );
}