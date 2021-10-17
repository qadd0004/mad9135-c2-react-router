import { Route, NavLink } from 'react-router-dom';
import User from '../User/User';
import './users.css';

export default function Users (props) {
  let list = props.list;
  let findUser = props.findUser;

  return (
    <>
      <div className='animation'>Loading</div>
      <div className='users'>
        <div className='user-list'>
          {list.length === 0 && <p>There are no users yet</p>}
          {list.map((item, index) => (
            <NavLink to={`/users/${index + 1}`} className='card' key={index}>
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
            <Route exact path='/users/:id'>
              <User findUser={findUser} />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}
