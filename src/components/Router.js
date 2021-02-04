import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../screens/LoginScreen';


export const AppRouter = ()=> (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
    </Switch>
)

export default AppRouter;