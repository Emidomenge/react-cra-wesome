import React from 'react';
import SVG from 'react-inlinesvg';
import forkMeImg from '../../assets/svg/github-corner-right.svg';
import css from './forkOnGithub.css';

const ForkOnGithub = () => (
  <div className="absolute top-0 right-0 fixed z-1">
    <a
      href="https://bitbucket.org/Atoplix/blank-cra-project/src/master/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SVG
        src={forkMeImg}
      />
      <p
        className={`${css.label} black b relative top-50`}
        style={{
          top: 40,
          left: 10,
        }}
      >
        {'Fork me on Github'}
      </p>
    </a>
  </div>
);

export default ForkOnGithub;
