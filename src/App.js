import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NewBlog from './blogs/pages/NewBlog';
import Users from './user/pages/Users';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact><Users /> </Route>
        <Route path='/blogs/new' exact><NewBlog /></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
