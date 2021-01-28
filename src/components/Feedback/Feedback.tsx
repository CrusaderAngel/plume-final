import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFeedbackComponentsData } from '../../redux/actions/feedbackActions';
import ProfiWidget from '../ProfiWidget';
import './Feedback.css';
import hendrick from '../../img/assets/feedback/static/static1.png';
import julia from '../../img/assets/feedback/static/static2.png';
import lyudmila from '../../img/assets/feedback/static/static3.png';


export const Feedback: React.FC = () => {
  const dispatch = useDispatch();
  const feedbackComponentsData = useSelector((state: any) => state.feedbackComponentsData);
  const { data } = feedbackComponentsData;

  useEffect(() => {
    dispatch(fetchAllFeedbackComponentsData());
  }, [dispatch]
  );

  return (
    <section id="feedback">
      <h2 id="section-header">ОТЗЫВЫ</h2>
      <div className="feedback-static">
        <div className="feedback-static-inner">
          <img className="feedback-static-img" src={hendrick} alt="" />
          <div>
            <h3 className="feedback-static-title">Ян-Хендрик</h3>
            <p className="feedback-static-text">
              Занятия мне понравились. Все супер! Занятия не скучные, каждый раз
              много новых упражнений. Мария ни разу не опоздала, очень приятный
              человек с хорошей энергетикой. Обязательно обращусь ещё.
          </p>
          </div>
        </div>

        <div className="feedback-static-inner">
          <img className="feedback-static-img" src={julia} alt="" />
          <div>
            <h3 className="feedback-static-title">Юлия</h3>
            <p className="feedback-static-text">
              С Марией очень приятно общаться, обсудили предварительно, что я
              хочу от занятий йоги. В день тренировки Мария пришла вовремя, само
              занятие пролетело незаметно и в приятной атмосфере. В жизни она
              прекрасный и светлый человек. С удовольствием её рекомендую
          </p>
          </div>
        </div>

        <div className="feedback-static-inner">
          <img className="feedback-static-img" src={lyudmila} alt="" />
          <div>
            <h3 className="feedback-static-title">Людмила</h3>
            <p className="feedback-static-text" id="feedback-last-text">
              Маша прекрасный специалист, я нашими занятиями осталась очень
              довольна, буквально с первой тренировки увидела результат и тело
              быстро приобрело рельеф и мышцы подтянулись.
          </p>
          </div>
        </div>
      </div>

      {/*
        *
        *CAROUSEL 
        *
      */}

      <div id="feedback-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner" data-interval="false">
          <div className="carousel-item active">
            <div className="feedback-static-inner">
              <img className="feedback-static-img" src={hendrick} alt="" />
              <div className="feedback-static-text-container">
                <h3 className="feedback-static-title">Ян-Хендрик</h3>
                <p className="feedback-static-text">
                  Занятия мне понравились. Все супер! Занятия не скучные, каждый раз
                  много новых упражнений. Мария ни разу не опоздала, очень приятный
                  человек с хорошей энергетикой. Обязательно обращусь ещё.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="feedback-static-inner">
              <img className="feedback-static-img" src={julia} alt="" />
              <div className="feedback-static-text-container">
                <h3 className="feedback-static-title">Юлия</h3>
                <p className="feedback-static-text">
                  С Марией очень приятно общаться, обсудили предварительно, что я
                  хочу от занятий йоги. В день тренировки Мария пришла вовремя, само
                  занятие пролетело незаметно и в приятной атмосфере. В жизни она
                  прекрасный и светлый человек. С удовольствием её рекомендую
               </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="feedback-static-inner">
              <img className="feedback-static-img" src={lyudmila} alt="" />
              <div className="feedback-static-text-container">
                <h3 className="feedback-static-title">Людмила</h3>
                <p className="feedback-static-text" id="feedback-last-text">
                  Маша прекрасный специалист, я нашими занятиями осталась очень
                  довольна, буквально с первой тренировки увидела результат и тело
                  быстро приобрело рельеф и мышцы подтянулись.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev .text-secondary" href="#feedback-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#feedback-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>


      <ProfiWidget />


      <div className="feedback-active">
        <div className="first-column">
          <div className="bubble-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus reiciendis expedita sapiente culpa eos numquam
            dignissimos magnam dolor veritatis quia debitis consectetur animi
            cum
          </div>
        </div>

        <div className="second-column">
          <div className="bubble-img">
            <img className="bubble-img-content" src={hendrick} alt="" />
          </div>
          <div className="bubble-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus reiciendis expedita sapiente culpa eos numquam
            dignissimos magnam dolor veritatis quia debitis consectetur animi
            cum
          </div>
        </div>

        <div className="third-column">
          <div className="bubble-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            cupiditate repellat voluptatum aliquid doloremque quibusdam
            ducimus, quod harum dignissimos dolores numquam modi
            exercitationem natus dolorem sint. Laudantium nam possimus modi!
            Eveniet vel nihil iste veritatis reprehenderit consequatur
            provident expedita. Ipsam culpa neque sit nostrum modi nemo
            delectus, officiis voluptates vero minima quod iste incidunt quis
            quia sunt
          </div>
        </div>

        <div className="fourth-column">
          <div className="bubble-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            cupiditate repellat voluptatum aliquid doloremque quibusdam
          </div>
          <div className="bubble-img">
            <img className="bubble-img-content" src={hendrick} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};