import React, { useState } from 'react';
import { BubbleData } from '../FeedbackBubbleElement/FeedbackBubbleElement';
import noimage from '../../../img/assets/noimage.png';
import AdminFeedbackBubbleElement from '../AdminFeedbackBubbleElement';

export type ColumnData = {
  columnClass: string,
  columnData: Array<BubbleData>,
  columnId: number
}

export const AdminFeedbackColumn: React.FC<ColumnData> = (props: ColumnData) => {
  const { columnClass, columnData, columnId } = props;
  const [columnElements, updateColumnElements] = useState(columnData);

  const handleClick = () => {
    updateColumnElements(columnElements => [...columnElements, <AdminFeedbackBubbleElement _id={"0"} imagePath={noimage} columnId={columnId} /> as unknown as BubbleData]);
    console.log(columnElements)
  };

  return (
    <div className={columnClass}>
      {columnElements}
      <div className="btn btn-info" onClick={() => handleClick()}>Добавить элемент</div>
    </div>
  );
};