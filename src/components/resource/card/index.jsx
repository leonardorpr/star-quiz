import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CreatorsGame } from 'core/store/ducks/game';

import { If, CharacterImage } from 'util';

import {
  Card, CardImg, CardBody, Button, Input,
} from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import { Modal } from 'components/resource';

import styles from './styles';

const GameCard = ({
  className, informations, handleScore,
}) => {
  const [toggle, setToggle] = useState(false);
  const [guess, setGuess] = useState({
    field: '', answered: false, openField: false, image: '',
  });
  const [tip, setTip] = useState(false);

  const getImage = async () => {
    const image = await CharacterImage(informations.name);
    setGuess(prevGuess => ({ ...prevGuess, image }));

    return guess.image;
  };

  const sendGuess = () => {
    setGuess(prevGuess => ({ ...prevGuess, answered: true }));

    const compare = informations.name.toLowerCase() === guess.field.toLowerCase();
    const score = tip ? 5 : 10;

    if (compare) {
      handleScore(score);
    }
  };

  const handleRenderIcon = () => {
    if (guess.field.length > 0) {
      return (
        <div className="col-md-1 action-icons" onClick={() => sendGuess()}>
          <MaterialIcon icon="check" size={25} color="#000" />
        </div>
      );
    }

    return null;
  };

  const handleToggle = () => {
    setTip(true);
    setToggle(prevToggle => !prevToggle);
  };

  const handleFieldChange = value => setGuess(prevGuess => ({ ...prevGuess, field: value }));

  return (
    <div className={className}>
      <div className="game-card">
        <Card>
          <CardImg top width="100%" src={getImage()} alt="Character Image" />
          <CardBody>
            <If test={!guess.answered}>
              <If test={!guess.openField}>
                <Button
                  size="lg"
                  block
                  className="button-who-am-i"
                  onClick={() => setGuess(prevGuess => ({ ...prevGuess, openField: true }))}
                >
                  Who am I
                </Button>
              </If>
              <If test={guess.openField}>
                <div className="row guess-field">
                  <div className={guess.field.length > 0 ? 'col-md-10' : 'col-md-12'}>
                    <Input
                      type="text"
                      placeholder="Who am I?"
                      onChange={event => handleFieldChange(event.target.value)}
                      value={guess.field}
                    />
                  </div>
                  {handleRenderIcon()}
                </div>
              </If>
              <Button
                className="button-see-more"
                size="lg"
                block
                onClick={() => handleToggle()}
              >
                See more
              </Button>
            </If>

            <If test={guess.answered}>
              <Button
                className="button-see-more"
                size="lg"
                block
                disabled
              >
                Answered (:
              </Button>
            </If>
          </CardBody>
        </Card>
        <Modal
          open={toggle}
          toggle={() => handleToggle()}
          informations={informations}
          image={guess.image}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleScore: bindActionCreators(CreatorsGame.handleScore, dispatch),
});

export default connect(null, mapDispatchToProps)(styles(GameCard));
