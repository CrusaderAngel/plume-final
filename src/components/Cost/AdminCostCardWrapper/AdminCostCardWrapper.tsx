import React, { useState } from 'react';
import { CostCardData } from '../CostCard/CostCard';
import noimage from '../../../img/assets/noimage.png';
import AdminCostCard from '../AdminCostCard';

export type AdminCostCardWrapperProps = {
  elements: Array<CostCardData>
};

export const AdminCostCardWrapper: React.FC<AdminCostCardWrapperProps> = (props) => {
  const { elements } = props;
  const [newCostArray, updateCostArray] = useState(elements);

  const handleClick = () => {
    updateCostArray((oldElements: Array<CostCardData>) => [...newCostArray, <AdminCostCard _id={"0"} imagePath={noimage} key={`key ${Math.random()}`} titleText={""} price={0} additionalInfo={""} data={newCostArray.length} /> as unknown as CostCardData]);
  }

  return (
    <>
      {newCostArray}
      <div className="btn btn-info admin-activities-card-wrapper-button" onClick={() => handleClick()}>Добавить элемент</div>
    </>
  );
}