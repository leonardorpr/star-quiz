import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CreatorsGame } from 'core/store/ducks/game';
import { push } from 'connected-react-router';
import { Button } from 'reactstrap';

import styles from './styles';

const Buttons = ({
  className,
  label,
  color,
  additionalClassName,
  pushToRoute,
  route,
  resetScore,
}) => {
  const redirectTo = () => {
    resetScore();
    pushToRoute(`/${route}`);
  };

  return (
    <div className={className}>
      <Button
        className={`button-body ${additionalClassName}`}
        color={color}
        onClick={() => redirectTo()}
      >
        {label}
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  pushToRoute: bindActionCreators(push, dispatch),
  resetScore: bindActionCreators(CreatorsGame.resetScore, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(styles(Buttons));
