import React from 'react';
import './FAQ.css';

export const FAQ: React.FC = () => {
  return(
    <section id="FAQ">
      <h2 id="section-header">ВОПРОСЫ</h2>
      <div className="faq-block">
        <h3 className="faq-question">Если у меня нет петель ТРХ?</h3>
        <p className="faq-answer">Всё в порядке, я привезу.</p>

        <h3 className="faq-question">Где можно заниматься с ТРХ?</h3>
        <p className="faq-answer">
          Петли можно закрепить на дереве, турнике или двери.
        </p>

        <h3 className="faq-question">Надо ли доплачивать за выезд?</h3>
        <p className="faq-answer">
          Нет, это включено в стоимость. Даже если вы живете за мкадом в
          пределах часа езды на машине.
        </p>

        <h3 className="faq-question">Сколько стоит пробное занятие?</h3>
        <p className="faq-answer">
          3000, потому что провожу полноценное занятие, не хуже, не лучше.
          Отличие в том, что на пробном занятии не заключаем договор.
        </p>

        <h3 className="faq-question">Зачем заключать договор?</h3>
        <p className="faq-answer">
          Я работаю официально, это моя безопасность. Я не несу
          ответственность за вашу жизнь, и в договоре указаны
          противопозакания. <a id="contract-example" href="">Вот</a> пример
          договора.
        </p>
      </div>
    </section>
  );
};