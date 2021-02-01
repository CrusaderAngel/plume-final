import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFeedbackComponentsData } from '../../../redux/actions/feedbackActions';
import Loader from '../../Loader';
import AdminFeedbackColumn from '../AdminFeedbackColumn';
import { BubbleData, FeedbackBubbleElement } from '../FeedbackBubbleElement/FeedbackBubbleElement';
import './AdminFeedback.css';

export const AdminFeedback: React.FC = () => {
  const dispatch = useDispatch();
  const feedbackComponentsData = useSelector((state: any) => state.feedbackComponentsData);
  const { loading, data } = feedbackComponentsData;

  useEffect(() => {
    dispatch(fetchAllFeedbackComponentsData());
  }, [dispatch]);

  if (loading) {
    return (<Loader />);
  } else {
    const firstColumn = [];
    const secondColumn = [];
    const thirdColumn = [];
    const fourthColumn = [];
    data.forEach((elem: BubbleData) => {
      switch (elem.columnId) {
        case 1:
          firstColumn.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />)
          break
        case 2:
          secondColumn.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />)
          break
        case 3:
          thirdColumn.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />)
          break
        case 4:
          fourthColumn.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />)
          break
      }
    });
    return (<>
      <h2 id="section-header">ОТЗЫВЫ</h2>
      <div className="feedback-active">
        <AdminFeedbackColumn columnClass={"first-column"} columnData={firstColumn} columnId={1} />
        <AdminFeedbackColumn columnClass={"second-column"} columnData={secondColumn} columnId={2} />
        <AdminFeedbackColumn columnClass={"third-column"} columnData={thirdColumn} columnId={3} />
        <AdminFeedbackColumn columnClass={"fourth-column"} columnData={fourthColumn} columnId={4} />
      </div>
    </>
    );
  }
};