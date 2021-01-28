import React, { MouseEvent } from 'react';
import { fetchAllCostComponentsData } from '../../../redux/actions/costActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../Loader';
import virt from '../../../img/assets/cost/virt.jpg';
import one from '../../../img/assets/cost/one.jpg';
import diagnosis from '../../../img/assets/cost/diagnosis.jpg';
import './Cost.css';


export const Cost: React.FC = () => {
  const dispatch = useDispatch();
  const costComponentsData = useSelector((state: any) => state.costComponentsData);
  const { loading, data } = costComponentsData;
  const fadeFront = document.querySelectorAll('.fade-in-out-front')
  const fadeBack = document.querySelectorAll('.fade-in-out-back')



  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const id = (event.target as HTMLButtonElement).dataset.id;

    switch ((event.target as HTMLButtonElement).textContent) {
      case 'подробнее':
        (event.target as HTMLButtonElement).textContent = 'назад';
        fadeFront[id].style.opacity = '0';
        fadeBack[id].style.opacity = '1';
        break
      case 'назад':
        (event.target as HTMLButtonElement).textContent = 'подробнее';
        fadeFront[id].style.opacity = '1';
        fadeBack[id].style.opacity = '0';
        break
      default:
        return;

    }
  }

  useEffect(() => {
    dispatch(fetchAllCostComponentsData());
  }, [dispatch]
  );

  if (loading) {
    return (
      <Loader />
    )
  } else {
    return (
      <section id="cost">
        <h2 id="section-header">СКОЛЬКО СТОИТ</h2>
        <div className="cost-cards">
          <div className="front-cards">
            <img className="front-card-img" src={virt} alt="virtual" />
            <div className="front-cards-text">
              <div className="fade-in-out-front">
                <h3 className="front-cards-title">Онлайн-занятие</h3>
                <p className="front-cards-price">2000</p>
                <br />
              </div>
              <button className="front-cards-button cost-button" data-id='0' onClick={event => handleClick(event)}>подробнее</button>
            </div>

            <div className="fade-in-out-back back-cards-text">
              <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
            </div>
          </div>

          <div className="front-cards">
            <img className="front-card-img" src={one} alt="virtual" />
            <div className="front-cards-text">
              <div className="fade-in-out-front">
                <h3 className="front-cards-title">Разовое занятие</h3>
                <p className="front-cards-price">3000</p>
                <br />
              </div>
              <button className="front-cards-button cost-button" data-id='1' onClick={event => handleClick(event)}>подробнее</button>
            </div>

            <div className="fade-in-out-back back-cards-text">
              <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
            </div>
          </div>

          <div className="front-cards">
            <img className="front-card-img" src={diagnosis} alt="virtual" />
            <div className="front-cards-text">
              <div className="fade-in-out-front">
                <h3 className="front-cards-title">Диагностика</h3>
                <p className="front-cards-price">4000</p>
                <br />
              </div>
              <button className="front-cards-button cost-button" data-id='2' onClick={event => handleClick(event)}>подробнее</button>
            </div>

            <div className="fade-in-out-back back-cards-text">
              <p className="front-cards-price">Здесь могла бы быть ваша реклама</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};