import React from 'react';

export type CostCardData = {
  _id: string,
  imagePath: string,
  titleText: string,
  price: number,
  additionalInfo: string,
  data: number
}

export const CostCard: React.FC<CostCardData> = (props: CostCardData) => {
  const { _id, imagePath, titleText, price, additionalInfo, data } = props;

  let fadeFront = document.querySelectorAll('.fade-in-out-front');
  let fadeBack = document.querySelectorAll('.fade-in-out-back');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.target as HTMLButtonElement).dataset.id;

    try {
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
    } catch (error) {
      fadeFront = document.querySelectorAll('.fade-in-out-front')
      fadeBack = document.querySelectorAll('.fade-in-out-back')
    }
  }

  return (
    <div className="front-cards" id={_id}>
      <img className="front-card-img" src={imagePath} alt="virtual" />
      <div className="front-cards-text">
        <div className="fade-in-out-front">
          <h3 className="front-cards-title">{titleText}</h3>
          <p className="front-cards-price">{price}</p>
          <br />
        </div>
        <button className="front-cards-button cost-button" data-id={data} onClick={event => handleClick(event)}>подробнее</button>
      </div>

      <div className="fade-in-out-back back-cards-text">
        <p className="front-cards-additional-info">{additionalInfo}</p>
      </div>
    </div>
  );

}