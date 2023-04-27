import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NewBlog from './blogs/pages/NewBlog';
import Users from './user/pages/Users';
import MainNavigation from './shared/component/Navigation/MainNavigation'
import UserBlogs from './blogs/pages/UserBlogs';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact><Users /> </Route>
        <Route path="/:userId/blogs" exact><UserBlogs/></Route>
        <Route path='/blogs/new' exact><NewBlog /></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
