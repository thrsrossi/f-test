import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import { DefaultLayout } from '../styles/layouts/default-layout';
import { Header } from './Header';
import { Home } from '../pages/home';
import { User } from '../pages/user';
import { NotFound } from '../pages/not-found';

export const App = () => {
  return (
    <DefaultLayout>
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect from='*' to='/404' />
        </Switch>
      </BrowserRouter>
    </DefaultLayout>
  );
};
