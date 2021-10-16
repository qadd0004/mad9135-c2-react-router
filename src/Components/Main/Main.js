import React from 'react';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Addresses from '../Addresses/Addresses';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Main (props) {
  return (
    <>
      <Switch>
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route exact path='/addresses'>
          <Addresses />
        </Route>
        <Route exact path='/404'>
          <Not />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </>
  );
}
