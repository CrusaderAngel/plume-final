import React from 'react';
import ClientView from '../../views/ClientView';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'
import AdminView from '../../views/AdminView';
import LoginView from '../../views/LoginView';

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Route exact path='/' component= {ClientView} />
      <Route path='/admin' component={AdminView} />
      <Route path='/login' component={LoginView} />
    </ BrowserRouter>
  );
};
