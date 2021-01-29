import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCostComponentsData } from '../../../redux/actions/costActions';
import Loader from '../../Loader';
import AdminCostCard from '../AdminCostCard';
import { CostCardData } from '../CostCard/CostCard'
import './AdminCost.css';

export const AdminCost: React.FC = () => {
  const dispatch = useDispatch();
  const costComponentsData = useSelector((state: any) => state.costComponentsData);
  const { loading, data } = costComponentsData;
  useEffect(() => {
    dispatch(fetchAllCostComponentsData());
  }, [dispatch]
  );

  if (loading) {
    return (
      <Loader />
    );
  } else {
    let adminCostArray: any = [];
    data.forEach((elem: CostCardData, index) => {
      adminCostArray.push(<AdminCostCard _id={elem._id} imagePath={elem.imagePath} key={`key ${elem._id}`}
        titleText={elem.titleText} price={elem.price} additionalInfo={elem.additionalInfo} data={index} />)
    })
    return (
      <>
        <h2 id="section-header">СКОЛЬКО СТОИТ</h2>
        {adminCostArray}
      </>
    );
  }
};