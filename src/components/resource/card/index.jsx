import React, { useState } from 'react';
import {
  Card, CardImg, CardBody, Button, Input,
} from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import { Modal } from 'components/resource';
import { If } from 'util';
import styles from './styles';

const GameCard = ({ className }) => {
  const [toggle, setToggle] = useState(false);
  const [guessField, setGuessField] = useState(false);
  const [guess, setGuess] = useState('');

  const handleRenderIcon = () => {
    if (guess.length > 0) {
      return (
        <div className="col-md-1 action-icons">
          <MaterialIcon icon="check" size={25} color="#000" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className={className}>
      <div className="game-card">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Character Image"
          />
          <CardBody>
            <If test={!guessField}>
              <Button
                size="lg"
                block
                className="button-who-am-i"
                onClick={() => setGuessField(true)}
              >
                Who am I
              </Button>
            </If>
            <If test={guessField}>
              <div className="row guess-field">
                <div className={guess.length > 0 ? 'col-md-10' : 'col-md-12'}>
                  <Input
                    type="text"
                    placeholder="Who am I?"
                    onChange={event => setGuess(event.target.value)}
                    value={guess}
                  />
                </div>
                {handleRenderIcon()}
              </div>
            </If>
            <Button
              className="button-see-more"
              size="lg"
              block
              onClick={() => setToggle(prevToggle => !prevToggle)}
            >
              See more
            </Button>
          </CardBody>
        </Card>
        <Modal open={toggle} toggle={() => setToggle(prevToggle => !prevToggle)} />
      </div>
    </div>
  );
};

export default styles(GameCard);
