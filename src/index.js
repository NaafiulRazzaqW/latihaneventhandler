import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Toolbar from './buttontest';
import Toolbar1 from './eventhandlersasprops';
import ButtonTest from './eventhandlernaming';
import Babi from './eventhandlersasprops';
import Toolbar2 from './Eventpropagation';
import Toolbar3 from './Stoppingpropagation';
import Signup from './testsendbutton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Toolbar/>
     <Toolbar1/>
    <ButtonTest/>
    <Toolbar2/>
    <Toolbar3/>
    <Signup/>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
