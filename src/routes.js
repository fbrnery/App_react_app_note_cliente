import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from './pages/Home';
import Header from './components/Header'
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

import PrivateRouter from './components/auth/private_route';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRouter exact path="/notes" component={NotesIndexScreen} />
        <PrivateRouter exact path="/users/edit" component={UserEditScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;