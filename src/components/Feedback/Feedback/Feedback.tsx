import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFeedbackComponentsData } from '../../../redux/actions/feedbackActions';
import ProfiWidget from '../../ProfiWidget';
import './Feedback.css';
import hendrick from '../../../img/assets/feedback/static/static1.png';
import julia from '../../../img/assets/feedback/static/static2.png';
import lyudmila from '../../../img/assets/feedback/static/static3.png';
import Loader from '../../Loader';
import FeedbackBubbleElement from '../FeedbackBubbleElement';
import { BubbleData } from '../FeedbackBubbleElement/FeedbackBubbleElement';


export const Feedback: React.FC = () => {
  const dispatch = useDispatch();
  const feedbackComponentsData = useSelector((state: any) => state.feedbackComponentsData);
  const { loading, data } = feedbackComponentsData;

  useEffect(() => {
    dispatch(fetchAllFeedbackComponentsData());
  }, [dispatch]
  );

  if (loading) {
    return (<Loader />)
  } else {
    const firstRow = [];
    const secondRow = [];
    const thirdRow = [];
    const fourthRow = [];
    data.forEach((elem: BubbleData) => {
      switch (elem.columnId) {
        case (1):
          firstRow.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />);
          break
        case (2):
          secondRow.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />);
          break
        case (3):
          thirdRow.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />);
          break
        case (4):
          fourthRow.push(<FeedbackBubbleElement _id={elem._id} imagePath={elem.imagePath} columnId={elem.columnId} />);
          break
      }
    });
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
            {fourthRow}
          </div>

          <div className="second-column">
            {secondRow}
          </div>

          <div className="third-column">
            {thirdRow}
          </div>

          <div className="fourth-column">
            {fourthRow}
          </div>
        </div>
      </section>
    );
  }
};