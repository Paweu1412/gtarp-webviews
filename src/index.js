import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Webviews } from './Webviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Webviews />
  </React.StrictMode>
);