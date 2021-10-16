import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import User from '../User/User';

/*
.sort((a, b) => {
    let na = a.name.first
        fb = b.name.lasn;

    if (na > nb) {
        return -1;
    }
    if (na < nb) {
        return 1;
    }
    return 0;
})
*/

export default function TableRow (props) {
  console.log(props.users);
  let usersSorted = props.users.sort((a, b) => {
    let na = a.name.last.toLowerCase();
    let nb = b.name.last.toLowerCase();

    if (na < nb) {
      return -1;
    }
    if (na > nb) {
      return 1;
    }
    return 0;
  });

  <div className='user-details'>
    <Route exact path='/users/:id'>
      <User findUser={props.findUser} />
    </Route>
  </div>;

  return usersSorted.map((item, index) => (
    <tr className='row' key={item.name}>
      <td>
        <NavLink to={`/users/${index + 1}`}>
          {item.name.first} {item.name.last}
        </NavLink>
      </td>
      <td>
        {item.location.street.number} {item.location.street.name}
      </td>
      <td>{item.location.city}</td>
      <td>{item.location.state}</td>
      <td>{item.location.country}</td>
      <td>{item.location.postcode}</td>
    </tr>
  ));
}
