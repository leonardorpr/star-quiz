import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { Button } from 'reactstrap';

import styles from './styles';

const Buttons = ({
  className, label, color, additionalClassName, pushToRoute, route,
}) => {
  const redirectTo = () => pushToRoute(`/${route}`);

  return (
    <div className={className}>
      <Button
        className={`button-body ${additionalClassName}`}
        color={color}
        onClick={() => redirectTo(route)}
      >
        {label}
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  pushToRoute: bindActionCreators(push, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(styles(Buttons));
