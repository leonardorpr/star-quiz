import React from 'react';
import { Header, Button } from 'components/resource';
import { logo } from 'assets/brands';

import styles from './styles';

const Home = ({ className }) => (
  <div className={className}>
    <div className="wrapper">
      <Header />
      <div className="centralize-content">
        <img src={logo} alt="Darth Vader brand" className="logo-body" />
        <p className="letter-body">StarQuiz</p>
        <Button color="warning" label="Start" route="about" />
      </div>
    </div>
  </div>
);

export default styles(Home);
