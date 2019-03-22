import React from 'react';
import { Provider } from 'react-redux';
import { Header } from 'components/resource';

import store from 'core/store';
import Routes from 'components/routes';

const App = () => (
  <Provider store={store}>
    <Header />
    <Routes />
  </Provider>
);

export default App;
