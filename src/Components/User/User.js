import { useParams } from 'react-router-dom';
import './user.css';

export default function User ({ list }) {
  const { id } = useParams();

  let user = list.find((item, index) => parseInt(id) === index + 1);

  return (
    <>
      <div className='animation'>Loading</div>
      <div className='cardDetail'>
        <img
          className='pictureD'
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <p className='nameD item'>{`Name: ${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
        <p className='gender item'>{`Gender ${user.gender}`}</p>
        <p className='street item'>{`Street: ${user.location.street.number} ${user.location.street.name}`}</p>
        <p className='city item'>{`City: ${user.location.city}`}</p>
        <p className='state item'>{`State: ${user.location.state}`}</p>
        <p className='country item'>{`Country: ${user.location.country}`}</p>
        <p className='postcode item'>{`Postal code: ${user.location.postcode}`}</p>
        <p className='login item'>Login info:</p>
        <p className='uuid item'>
          UUID: <br />
          {`${user.login.uuid}`}
        </p>
        <p className='username item'>{`Username: ${user.login.username}`}</p>
        <p className='password item'>{`Password: ${user.login.password}`}</p>
        <p className='emailD item'>Email: {user.email}</p>
        <p className='cellD item'>Cell Phone: {user.cell}</p>
      </div>
    </>
  );
}
