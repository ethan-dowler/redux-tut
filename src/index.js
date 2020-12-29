import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import UserTable from './features/users/UserTable';

import './index.css';

const Home = () => (
  <div>
    Hello. See Users <Link to="/users">here</Link>.
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App>
          <Switch>
            <Route path="/users">
              <UserTable />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </App>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
