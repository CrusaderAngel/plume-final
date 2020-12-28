import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return(
    <section id="about">
      <h2 id="section-header">КТО ТАКАЯ</h2>
      <div id="about-content">
        <img src="/assets/about.png" alt="" id="about-img" />
        <div id="about-text">
          <p className="about-text-content">
            Личный тренер, специалист по телу Fresh&Yoga Fit. Учусь на
            кинезиолога.
          </p>
          <p className="about-text-content">
            В телесные практики пришла через танцы, занимаюсь с 4х лет.
          </p>
          <p className="about-text-content" id="bottom">
            Тренирую с 2016 года. Вела свой проект Interfit. С 2018 года
            работаю только индивидуально.
          </p>
        </div>
      </div>
    </section>
  );
}