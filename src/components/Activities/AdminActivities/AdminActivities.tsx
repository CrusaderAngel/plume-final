import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllActivitiesComponentsData } from '../../../redux/actions/activitiesActions';
import Loader from '../../Loader';
import { ActivitiesData } from '../ActivitiesCard/ActivitiesCard';
import AdminActivitiesCard from '../AdminActivitiesCard';
import AdminActivitiesCardWrapper from '../AdminActivitiesCardWrapper';
import './AdminActivities.css';

export const AdminActivities: React.FC = () => {
  const dispatch = useDispatch();
  const activitiesComponentsData = useSelector((state: any) => state.activitiesComponentsData);
  const { loading, data } = activitiesComponentsData;

  useEffect(() => {
    dispatch(fetchAllActivitiesComponentsData());
  }, [dispatch]
  );

  if (!loading) {
    let ActivitiesCardsArray: any = [];
    data.forEach((elem: ActivitiesData) => {
      ActivitiesCardsArray.push(<AdminActivitiesCard _id={elem._id} key={elem._id} imagePath={elem.imagePath} textContent={elem.textContent} />)
    });
    return (
      <>
        <h2 id="section-header">С ЧЕМ ПОМОГАЮ</h2>
        <AdminActivitiesCardWrapper elements={ActivitiesCardsArray} />
      </>
    );
  } else {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
};