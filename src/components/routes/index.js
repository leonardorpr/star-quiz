import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from 'components/app/home';
import Game from 'components/app/game';
import About from 'components/app/about';
import Ranking from 'components/app/ranking';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/about" component={About} />
      <Route exact path="/ranking" component={Ranking} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
