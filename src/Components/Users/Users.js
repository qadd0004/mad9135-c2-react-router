import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import User from '../User/User';
import './users.css';

export default function Users (props) {
  const [list, setList] = useState([]);
  //hooks return 2 things - variable, function to change the variable
  //useState - for creating and updating variables inside state
  //useEffect - for the rendering lifecycle

  async function fetchData () {
    let url =
      'https://randomuser.me/api/?seed=qadd0004&results=32&nat=au,ca,nz,gb,us';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setList(data.results); //new array being put into `list`
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered
  }

  function findUser (id) {
    return list.find((item, index) => parseInt(id) === index + 1);
    //return an object for the single user
  }

  useEffect(() => {
    //all useEffect functions run on the initial render of the component
    console.log('useEffect was called.');
    fetchData();
  }, []);

  return (
    <div className='users'>
      <div className='user-list'>
        {list.length === 0 && <p>There are no users yet</p>}
        {list.map((item, index) => (
          <NavLink to={`/users/${index + 1}`} className='card' key={item.name}>
            <img
              className='picture'
              src={item.picture.large}
              alt={`${item.name.first} ${item.name.last}`}
            />
            <p className='name'>{`${item.name.first} ${item.name.last}`}</p>
            <p className='email'>{item.email}</p>
            <p className='cell'>Cell Phone: {item.cell}</p>
          </NavLink>
        ))}

        <div className='user-details'>
          <Route path='/users/:id'>
            <User findUser={findUser} />
          </Route>
        </div>
      </div>
    </div>
  );
}
//logical short-circuiting
// value && object
//if value is true then the object is rendered
//if value is false then the object is NOT rendered
