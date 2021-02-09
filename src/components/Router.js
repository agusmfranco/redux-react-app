import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
import Felicidades from '../screens/AdoptadoScreen';


export const AppRouter = ()=> (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/felicidades">
            <Felicidades />
        </Route>
    </Switch>
)

export default AppRouter;