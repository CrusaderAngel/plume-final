import React from 'react';
import logo from '../../img/assets/logo.svg';


import './AdminView.css';

export const AdminView: React.FC = () => {
  return (
    <>
      <div id="admin-wrapper">
        <div id="left-panel">
          <div id="left-panel-content">
            <img src={logo} id="admin-logo" alt="logo" />
            <p>С чем помогаю</p>
            <p>Сколько стоит</p>
            <p>Отзывы</p>
          </div>
          <div id="window">
          </div>
        </div>
      </div>
    </>
  );
}