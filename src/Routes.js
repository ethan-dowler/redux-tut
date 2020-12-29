import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import UserTable from './components/UserTable';

const Routes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default Routes;
