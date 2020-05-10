import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DefaultLayout } from '../styles/layouts/default-layout';
import { Header } from './shared/Header';
import { Search } from '../pages/search';
import { NotFound } from '../pages/not-found';

export const App = () => {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/search' />
          </Route>
          <Route path='/search'>
            <Search />
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
