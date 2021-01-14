import React from 'react';
import ClientView from '../../views/ClientView';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path='/' component= {ClientView} />
    </ BrowserRouter>
  );
};
