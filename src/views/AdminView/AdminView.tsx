import React, { useState } from 'react';
import AdminWindow from '../../components/AdminWindow';
import logo from '../../img/assets/logo.svg';
import './AdminView.css';


export const AdminView: React.FC = () => {
  const [type, setType] = useState("ACTIVITIES");
  return (
    <div id="admin-wrapper">
      <div id="left-panel">
        <div id="left-panel-content">
          <img src={logo} id="admin-logo" alt="logo" />
          <p onClick={() => setType("ACTIVITIES")}>С чем помогаю</p>
          <p onClick={() => setType("COST")}>Сколько стоит</p>
          <p onClick={() => setType("FEEDBACK")}>Отзывы</p>
        </div>
      </div>
      <div id="admin-window">
        <AdminWindow type={type} />
      </div>
    </div>
  );
}