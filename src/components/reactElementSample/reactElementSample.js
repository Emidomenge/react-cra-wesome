import FontAwesome from 'react-fontawesome';
import React from 'react';
import logo from '../../assets/svg/logo.svg';
import './reactElementSample.css';

const ReactElementSample = () => (
  <header className="App-header bg-black tc">
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      <FontAwesome
        className="super-crazy-colors"
        name="flask"
        size="3x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </div>
    <h1 className="App-title">
      {'Welcome to the super CRA ! :D'}
    </h1>
  </header>
);

export default ReactElementSample;
