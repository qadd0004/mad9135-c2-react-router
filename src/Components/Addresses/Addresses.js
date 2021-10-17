import { Route } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';
import User from '../User/User';
import './addresses.css';

export default function Addresses (props) {
  let list = props.list;
  let findUser = props.findUser;

  return (
    <>
      <table className='users-address'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Street</th>
            <th>City</th>
            <th>State/Province</th>
            <th>Country</th>
            <th>Postal Code</th>
          </tr>
        </thead>
        <tbody>
          <TableRow users={list} findUser={findUser} />
        </tbody>
      </table>
      <div className='user-details'>
        <Route exact path='/users/:id'>
          <User findUser={findUser} />
        </Route>
      </div>
      ;
    </>
  );
}
