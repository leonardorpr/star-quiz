import React from 'react';
import { Button } from 'reactstrap';
import { Header } from 'components/resource';
import { logo } from 'assets/brands';

import styles from './styles';

const Home = ({ className }) => (
  <div className={className}>
    <div className="wrapper">
      <Header />
      <div className="centralize-content">
        <img src={logo} alt="Darth Vader brand" className="logo-body" />
        <p className="letter-body">StarQuiz</p>
        <Button className="button-body" color="warning">
          Start
        </Button>
      </div>
    </div>
  </div>
);

export default styles(Home);
