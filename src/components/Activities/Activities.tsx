import React from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import {fetchAllActivitiesComponentsData} from '../../redux/actions/activitiesActions';
import './Activities.css';
import edema from '../../img/assets/activities/otek.jpg';
import stretch from '../../img/assets/activities/stretch.png';
import posture from '../../img/assets/activities/posture.png';
import hike from '../../img/assets/activities/hike.png';
import muscles from '../../img/assets/activities/muscles.png';
import birch from '../../img/assets/activities/berezka.jpg';
import { useEffect } from 'react';
import ActivitiesCard from './ActivitiesCard';
import {ActivitiesData} from './ActivitiesCard/ActivitiesCard';




export const Activities: React.FC = () => {
  const dispatch = useDispatch();
  const activitiesComponentsData = useSelector((state:any) => state.activitiesComponentsData);
  const {loading, data} = activitiesComponentsData;

  useEffect(() => {
    dispatch(fetchAllActivitiesComponentsData());
  }, [dispatch]
  );

  if(!loading) {
    let ActivitiesCardsArray:any = [];
    data.forEach((elem:ActivitiesData) => {
      ActivitiesCardsArray.push(<ActivitiesCard _id={elem._id} imagePath={elem.imagePath} textContent={elem.textContent} />)
    });
    console.log(ActivitiesCardsArray)
    return(
      <section id="activities">
        <h2 id="section-header">С ЧЕМ ПОМОГАЮ</h2>
          <div id="activities-wrapper">
            {ActivitiesCardsArray}
          </div>
      </section>
    );
  }else{
    return null;
  }
};