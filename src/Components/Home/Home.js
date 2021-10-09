//import PropTypes from 'prop-types';
//used to be part of react... now its own module

export default function Home (props) {
  return (
    <div className='home'>
      <p>This is the home page.</p>
      <p>
        If you click on users you will get a users list cards, click on a card
        to see more details about the user.
      </p>
      <p> If you click on addresses you will get a table of users addresses</p>
    </div>
  );
}
