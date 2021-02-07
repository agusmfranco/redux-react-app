import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';


export const AppRouter = ()=> (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
    </Switch>
)

export default AppRouter;