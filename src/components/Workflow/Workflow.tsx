import React from 'react';
import './Workflow.css';

export const Workflow: React.FC = () => {
  return(
    <section id="workflow">
    <h2 id="section-header">КАК ПРОХОДИТ</h2>
    <div id="workflow-text-wrapper">
      <p className="workflow-text">
        В начале я узнаю, что Вам интересно, какие у Вас проблемы, чего
        хотет добиться на занятиях. Я приезжаю в назначенное время, куда Вам
        удобнее, например домой или в офис.
      </p>
      <p className="workflow-text">
        На первом занятии провожу короткое тестирование и тренировку на 40
        минут.
      </p>
      <p className="workflow-text">
        Всё необходимое возьму с собой. Вам нужна удобная спортивная форма и
        кроссовки, если занятие на улице.
      </p>
      <p className="workflow-text">
        Тренировка — это не только разминка и упражнения. Я также использую
        современные техники: миофасциальный релиз и кинезиотейпирование. Это
        делает занятие более эффективным.
      </p>
      <p className="workflow-text">Так выглядит тренировка вживую:</p>
    </div>
    <div id="workflow-video-container">
      <iframe id="video" src="https://www.youtube.com/embed/LXb3EKWsInQ" title='workflow-video' frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  </section>
  );
};