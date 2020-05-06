import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import { DefaultLayout } from '../styles/layouts/default-layout';
import { Header } from './navigation/Header';
import { Search } from '../pages/search';
import { User } from '../pages/user';
import { NotFound } from '../pages/not-found';

export const App = () => {
  return (
    <DefaultLayout>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/search' />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    </DefaultLayout>
  );
};
