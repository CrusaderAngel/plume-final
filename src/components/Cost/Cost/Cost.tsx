import React from 'react';
import { fetchAllCostComponentsData } from '../../../redux/actions/costActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../Loader';
import './Cost.css';
import CostCard from '../CostCard';
import { CostCardData } from '../CostCard/CostCard';


export const Cost: React.FC = () => {
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
    )
  } else {
    let costArray: any = [];
    data.forEach((elem: CostCardData, index) => {
      costArray.push(<CostCard _id={elem._id} imagePath={elem.imagePath} key={`key ${elem._id}`}
        titleText={elem.titleText} price={elem.price} additionalInfo={elem.additionalInfo} data={index} />)
    })
    return (
      <section id="cost">
        <h2 id="section-header">СКОЛЬКО СТОИТ</h2>
        <div className="cost-cards">
          {costArray}
        </div>
      </section>
    );
  }
};