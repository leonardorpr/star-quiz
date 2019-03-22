import React from 'react';
import { Button } from 'reactstrap';
import { Header } from 'components/resource';
import { logo } from 'assets/brands';

import styles from './styles';

const Home = ({ className }) => (
  <div className={className}>
    <Header />
    <div className="wrapper">
      <img src={logo} alt="Darth Vader brand" className="logo-body" />
      <p className="letter-body">StarQuiz</p>
      <Button className="button-body" color="warning">
        START
      </Button>
    </div>
  </div>
);

export default styles(Home);
