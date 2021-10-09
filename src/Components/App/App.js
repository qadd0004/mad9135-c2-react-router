import './App.css';
import Navbar from '../Navbar/Navbar';
//import { NavLink } from 'react-router-dom';
//next 4 go inside the <main>
import Home from '../Home/Home';
import Users from '../Users/Users';
import Addresses from '../Addresses/Addresses';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

function App () {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/addresses'>
            <Addresses />
          </Route>
          <Route path='/404'>
            <Not />
          </Route>
          <Route
            path='/'
            exact
            render={props => {
              //do stuff
              return (
                <div className='home' style={{ padding: '1rem' }}>
                  <Home manually={props} isAlive={true} anything={1} />
                </div>
              );
            }}
          />
          <Redirect to='/404' />
        </Switch>
      </main>
    </div>
  );
} /**
<Route path="/" exact>
  <Home mycustomprop="asdf" />
</Route> 
<Route path="/" exact component={Home} />

 */

export default App;
