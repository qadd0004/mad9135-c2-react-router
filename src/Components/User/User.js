import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function User ({ findUser }) {
  // console.log(props.match.params.id);
  // props.location   props.history
  // props.findUser() - function in Users.js to search state array
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setUser(findUser(id));
  }, [findUser, id]);

  return (
    <>
      <p>This is the User details page.</p>
      <p>Id: {id}</p>
      <p>Name: {user && user.name}</p>
      <p>Address: {user && user.address}</p>
    </>
  );
}

User.propTypes = {
  findUser: PropTypes.func.isRequired,
};
