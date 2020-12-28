import React from 'react';
import './Quote.css';

export const Quote: React.FC = () => {
  return(
    <section id="quote">
      <div id="quote-container">
        <h3 id="quote-header">Тренировки не самоцель.</h3>
        <p id="quote-subheader">
          Это средство, чтобы каждый день были силы пробовать новое,
          заниматься любимыми хобби, путешествовать<br />и кайфовать от жизни.
        </p>
      </div>
    </section>
  );
};