import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import HelloWorld from '../app';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
