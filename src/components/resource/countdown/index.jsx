import React from 'react';
import { connect } from 'react-redux';
import Timer from 'react-countdown-now';
import MaterialIcon from 'material-icons-react';

import styles from './styles';

const Countdown = ({ className }) => (
  <div className={className}>
    <div className="text-right mr-5 mt-1 animated slideInRight">
      <MaterialIcon icon="timer" size={35} color="#000" />
      <h3 className="float-right ml-2">
        <Timer
          date={Date.now() + 120000}
          renderer={({ minutes, seconds }) => (
            <span className="countdown">
              {minutes}:{seconds}
            </span>
          )}
          // onComplete={}
        />
      </h3>
    </div>
  </div>
);

export default connect()(styles(Countdown));
