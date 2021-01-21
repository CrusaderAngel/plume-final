import React from 'react';
import Activities from '../../components/Activities';
import Cost from '../../components/Cost';
import Feedback from '../../components/Feedback';

import './AdminView.css';

export const AdminView:React.FC = () => {
  return(
    <>
    <Activities editable={true}/>
    <Cost />
    <Feedback />
    </>
  );
}