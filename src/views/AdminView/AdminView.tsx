import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminWindow from '../../components/AdminWindow';
import logo from '../../img/assets/logo.svg';
import { IState } from '../../redux/store';
import './AdminView.css';


export const AdminView: React.FC = () => {
  const userCredentials = useSelector((state: IState) => state.userLogin);
  const [type, setType] = useState("ACTIVITIES");
  const redirect = "/";

  const { data } = userCredentials;

  if (data === null || data === undefined) {
    return (
      <Redirect to={redirect} />
    );
  } else {
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
}