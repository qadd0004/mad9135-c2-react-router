import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

export default function User ({ findUser }) {
  // console.log(props.match.params.id);
  // props.location   props.history
  // props.findUser() - function in Users.js to search state array
  User.propTypes = {
    findUser: PropTypes.func.isRequired,
  };

  let [user, setUser] = useState(null);
  const { id } = useParams();
  setUser(findUser(id));

  useEffect(user => {
    return user;
  }, []);

  console.log(user);

  return (
    <div className='user'>
      <header>
        <Navbar />
      </header>
      <p>{user.name}</p>
    </div>
  );
}
