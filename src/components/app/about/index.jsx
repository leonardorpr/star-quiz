import React from 'react';
import { Button } from 'reactstrap';
import { Header } from 'components/resource';

import styles from './styles';

const About = ({ className }) => (
  <div className={className}>
    <div className="wrapper">
      <Header />
      <div className="centralize-content">
        <div className="container mt-2 mb-4">
          <div>
            <h1 className="titles">About the Game</h1>
            <p className="mt-3">
              StarQuiz is a game where you will test your knowledge of the Star Wars characters.
            </p>
            <hr className="my-4 titles" />

            <h3 className="mt-2 titles">How to play?</h3>
            <p>
              When you start the game, click the "Who am I?" button and type it the character's name
              in the field, then click "OK" to confirm your guess.
            </p>

            <h3 className="mt-2 titles">Time</h3>
            <p>
              When the game starts, you'll have two minutes to try to guess as many characters as
              you can.
            </p>

            <h3 className="mt-2 titles">Score</h3>
            <p>
              Each character you hit is worth 10 points, if you click on the character details card
              this score goes to 5 points. You will only be able to palpate once on each character
              and the mistakes do not reduce your points.
            </p>

            <h3 className="mt-2 titles">Ranking</h3>
            <p>
              After the end of the game, you can check your score and decide if you want to register
              in our ranking of players, for this, just fill out the form with your name and email.
            </p>
          </div>
        </div>

        <Button className="button-body" color="warning">
          Start Game
        </Button>
      </div>
    </div>
  </div>
);

export default styles(About);
