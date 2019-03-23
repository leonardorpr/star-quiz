import React, { useState } from 'react';
import { connect } from 'react-redux';
import Timer from 'react-countdown-now';
import MaterialIcon from 'material-icons-react';
import GameOver from '../game-over';

import styles from './styles';

const Countdown = ({ className }) => {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className={className}>
      <div className="text-right mr-5 mt-1 animated slideInRight">
        <div className="countdown">
          <MaterialIcon icon="timer" size={35} color="#000" />
          <h3 className="float-right ml-2">
            <Timer
              date={Date.now() + 1000}
              renderer={({ minutes, seconds }) => (
                <span>
                  {minutes}:{seconds}
                </span>
              )}
              onComplete={() => setGameOver(true)}
            />
          </h3>
        </div>
      </div>
      <GameOver open={gameOver} toggle={() => setGameOver(true)} />
    </div>
  );
};

export default connect()(styles(Countdown));
