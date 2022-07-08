import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'

const Routes = () => {
  return(
    <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/notes' component={NotesIndex} />
        <Route exact path='/users/edit' component={UserEdit} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;