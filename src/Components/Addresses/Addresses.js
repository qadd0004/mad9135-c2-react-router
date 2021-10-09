import { useState, useEffect } from 'react';
//import { Route, NavLink } from 'react-router-dom';
//import User from '../User/User';
import './addresses.css';

export default function Users (props) {
  const [list, setList] = useState([]);
  //hooks return 2 things - variable, function to change the variable
  //useState - for creating and updating variables inside state
  //useEffect - for the rendering lifecycle

  async function fetchData () {
    let url =
      'https://randomuser.me/api/?seed=qadd0004&results=18&nat=au,ca,nz,gb,us';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setList(data.results); //new array being put into `list`
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered
  }

  //   function findUser (id) {
  //     return list.find((item, index) => parseInt(id) === index + 1);
  //     //return an object for the single user
  //   }

  useEffect(() => {
    //all useEffect functions run on the initial render of the component
    console.log('useEffect was called.');
    fetchData();
  }, []); //here we are monitoring for changes to `name`

  return (
    <table className='users-address'>
      {/* user detail:
full address(street, city, state, postcode,
login info(uuid, username, password))
large image */}
      <tr>
        <th>User Name</th>
        <th>Street</th>
        <th>City</th>
        <th>State/Province</th>
        <th>Country</th>
        <th>Postal Code</th>
      </tr>

      {/* {list.length === 0 && <p>There are no users yet</p>} */}
      {list.map((item, index) => (
        <tr className='row' key={item.name}>
          <td>
            {item.name.first} {item.name.last}
          </td>
          <td>
            {item.location.street.number} {item.location.street.name}
          </td>
          <td>{item.location.city}</td>
          <td>{item.location.state}</td>
          <td>{item.location.country}</td>
          <td>{item.location.postcode}</td>
        </tr>
      ))}
    </table>
  );
}
