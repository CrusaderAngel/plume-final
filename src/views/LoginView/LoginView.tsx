import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from '../../img/assets/logo.svg';
import { sendUserCredentials } from '../../redux/actions/loginActions';
import { IState } from '../../redux/store';
import './LoginView.css';

export const LoginView: React.FC = () => {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state: IState) => state.userLogin);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { data, error } = userCredentials;


  const submitHandler = (event) => {
    event.preventDefault();
    if (login !== "" && password !== "") {
      dispatch(sendUserCredentials(login, password));
    } else {
      setMessage("Login/password should contain data");
    }
  }

  if (data !== null && data !== undefined) {
    return (<Redirect to="/admin" />)
  } else {
    if (error) {
      return (
        <div className="login-card-container">
          <div className="login-card">
            <img src={logo} alt="" id="login-logo" />
            <h2 className="login-card-header">Введите данные учетной записи</h2>
            <div className="message-red">Invalid login/password</div>
            <input className="login-card-input" type="email" name="email" placeholder="email@example.com" onChange={event => setLogin(event.target.value)} />
            <input className="login-card-input" type="password" name="password" placeholder="Super strong password" onChange={event => setPassword(event.target.value)} />
            <button className="btn btn-primary login-card-btn" onClick={event => submitHandler(event)}>Войти</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login-card-container">
          <div className="login-card">
            <img src={logo} alt="" id="login-logo" />
            <h2 className="login-card-header">Введите данные учетной записи</h2>
            <div className="message-red">{message}</div>
            <input className="login-card-input" type="email" name="email" placeholder="email@example.com" onChange={event => setLogin(event.target.value)} />
            <input className="login-card-input" type="password" name="password" placeholder="Super strong password" onChange={event => setPassword(event.target.value)} />
            <button className="btn btn-primary login-card-btn" onClick={event => submitHandler(event)}>Войти</button>
          </div>
        </div>
      );
    }
  }
};