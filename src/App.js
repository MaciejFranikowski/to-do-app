import './App.css';

import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <Router>
    <h2>Developer Tinder</h2>
    <main>

      <div class="topnav">
          <NavLink to="/" exact>User List</NavLink>
          <NavLink to="/new">Add new</NavLink>
          <NavLink to="/trash">Trash</NavLink>
      </div>
      <br></br>
      <Main />

    </main>
  </Router>
  );
}

export default App;
