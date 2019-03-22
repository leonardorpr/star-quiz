import React from 'react';
import { Button } from 'reactstrap';
import { CountDown, Card } from 'components/resource';
import styles from './styles';

const Game = ({ className }) => (
  <div className={className}>
    <CountDown />
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card />
        </div>

        <div className="col-sm-12 col-md-4">
          <Card />
        </div>

        <div className="col-sm-12 col-md-4">
          <Card />
        </div>

        <div className="col-sm-12 col-md-4">
          <Card />
        </div>

        <div className="col-sm-12 col-md-4">
          <Card />
        </div>

        <div className="col-sm-12 col-md-4">
          <Card />
        </div>
      </div>
      <Button color="warning" size="lg" block className="button-load-more">
        Load more
      </Button>
    </div>
  </div>
);

export default styles(Game);
