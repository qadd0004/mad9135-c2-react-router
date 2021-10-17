import { useParams } from 'react-router-dom';

export default function User ({ list }) {
  const { id } = useParams();

  let user = list.find((item, index) => parseInt(id) === index + 1);

  console.log(id);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {user && (
        <p>
          {' '}
          {user.name.first} {user.name.last}
        </p>
      )}
      {user && <p>{user.city}</p>}
    </div>
  );
}
