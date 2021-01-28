import React from 'react';
import AdminActivities from '../Activities/AdminActivities';
import AdminCost from '../Cost/AdminCost';
import AdminFeedback from '../Feedback/AdminFeedback';
import './AdminWindow.css';

type WindowElementType = {
  type: string;
}

export const AdminWindow: React.FC<WindowElementType> = (props: { type: string }) => {
  switch (props.type) {
    case "ACTIVITIES":
      return (<AdminActivities />);

    case "COST":
      return (<AdminCost />);

    case "FEEDBACK":
      return (<AdminFeedback />);
  }
};