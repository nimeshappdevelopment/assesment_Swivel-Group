import React from 'react';
import ReactDom from 'react-dom';
import Profile from './Components/Profile/Profile'
import { BrowserRouter } from 'react-router-dom';

it('renders Profile without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
     <Profile></Profile>
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});