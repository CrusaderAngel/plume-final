import React, { FormEvent, useState } from 'react';
import { CostCardData } from '../CostCard/CostCard'
import './AdminCostCard.css';


export const AdminCostCard: React.FC<CostCardData> = (props: CostCardData) => {
  const { _id, imagePath, titleText, price, additionalInfo, data } = props;
  const [newImage, setNewImage] = useState(imagePath);
  const [newTitle, setTitle] = useState(titleText);
  const [newPrice, setNewPrice] = useState(price);
  const [newAdditionalInfo, setAdditionalInfo] = useState(additionalInfo);


  let fadeFront = document.querySelectorAll('.fade-in-out-admin-front');
  let fadeBack = document.querySelectorAll('.fade-in-out-admin-back');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(_id, newImage, newTitle, newPrice, newAdditionalInfo);
  }



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
      fadeFront = document.querySelectorAll('.fade-in-out-admin-front')
      fadeBack = document.querySelectorAll('.fade-in-out-admin-back')
    }
  }

  return (
    <div className="admin-card-wrapper">
      <div className="admin-front-cards" id={_id}>
        <img className="admin-front-card-img" src={newImage} alt="virtual" />
        <div className="admin-front-cards-text">
          <div className="fade-in-out-admin-front">
            <h3 className="admin-front-cards-title">{newTitle}</h3>
            <p className="admin-front-cards-price">{newPrice}</p>
            <br />
          </div>
          <button className="admin-front-cards-button cost-button" data-id={data} onClick={event => handleClick(event)}>подробнее</button>
        </div>

        <div className="fade-in-out-admin-back admin-back-cards-text">
          <p className="admin-front-cards-additional-info">{newAdditionalInfo}</p>
        </div>
      </div>


      <form className="admin-activities-form">
        <div className="admin-activities-form-inputs">
          <div className="textarea-wrapper">
            <div className="textarea-front-container">
              <textarea name="admin-activities-image-text" className="admin-front-textarea-element"
                cols={30}
                rows={10}
                placeholder="Название"
                onChange={(event) => setTitle(event.target.value)}>{newTitle}</textarea>
              <textarea name="admin-activities-image-text" className="admin-front-textarea-element"
                cols={30}
                rows={10}
                placeholder="Цена"
                onChange={(event) => setNewPrice(event.target.value as unknown as number)}>{newPrice}</textarea>
            </div>
            <div className="textarea-back-container">
              <textarea name="admin-activities-image-text" className="admin-back-textarea-element"
                cols={30}
                rows={10}
                placeholder="Подробнее"
                onChange={(event) => setAdditionalInfo(event.target.value)}>{newAdditionalInfo}</textarea>
            </div>
          </div>
          <input type="text" className="admin-activities-input" placeholder="Вставьте ссылку на фото" />
        </div>
        <div className="admin-activities-form-buttons">
          <button type="submit" className="btn btn-success" onClick={event => submitHandler(event)}>Сохранить</button>
          <button type="submit" className="btn btn-danger">Удалить</button>
        </div>
      </form>
    </div>
  );
}