import React, { useState } from 'react';
import { ActivitiesData } from '../ActivitiesCard/ActivitiesCard';
import noimage from '../../../img/assets/noimage.png';
import AdminActivitiesCard from '../AdminActivitiesCard';

export type AdminActivitiesProps = {
  elements: Array<ActivitiesData>
}

export const AdminActivitiesCardWrapper: React.FC<AdminActivitiesProps> = (props) => {
  const { elements } = props;
  const [newElements, updateElements] = useState(elements);

  const handleClick = () => {
    updateElements((oldElements: Array<ActivitiesData>) => [...oldElements, <AdminActivitiesCard _id={"0"} key={0} imagePath={noimage} textContent={""} /> as unknown as ActivitiesData])
  }

  return (
    <>
      {newElements}
      <div className="btn btn-info admin-activities-card-wrapper-button" onClick={() => handleClick()}>Добавить элемент</div>
    </>
  );
};