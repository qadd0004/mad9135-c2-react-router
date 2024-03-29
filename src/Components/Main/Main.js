import React, { useEffect, useState } from 'react';
import User from '../User/User';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Addresses from '../Addresses/Addresses';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Main (props) {
  const [list, setList] = useState([]);

  async function fetchData () {
    let url =
      'https://randomuser.me/api/?seed=qadd0004&results=32&nat=au,ca,nz,gb,us';
    let resp = await fetch(url);
    let data = await resp.json();
    setList(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path='/users/:id'>
          <User list={list} />
        </Route>
        <Route exact path='/users'>
          <Users list={list} />
        </Route>
        <Route exact path='/addresses'>
          <Addresses list={list} />
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
