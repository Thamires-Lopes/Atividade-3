import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Index from './pages';
import About from './pages/about';

const routes = [
  {
    path: '/',
    component: Index,
    name: 'Home',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    exact: true,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Header title="Pitang 2" routes={routes} />
    <Switch>
      {routes.map(({ component, path, exact }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          component={component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
