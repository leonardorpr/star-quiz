import React from 'react';
import { CountDown } from 'components/resource';
import styles from './styles';

const Game = ({ className }) => (
  <div className={className}>
    <div className="container">Game</div>
    <CountDown />
  </div>
);

export default styles(Game);
