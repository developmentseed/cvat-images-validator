import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/cvat-images-validator">
      <Switch>
        <Route exact component={App} path="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
