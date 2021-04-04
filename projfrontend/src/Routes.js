import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { dlogin, hlogin } from './auth/helper';
import Dprofile from './components/Dprofile';
import Home from './components/Home';
import Login from './components/Login';
import Login_Doctor from './components/Login_Doctor';
import Login_Hospital from './components/Login_Hospital';
import Login_H from './components/Login_Hospital';
import Pprofile from './components/Pprofile';
import Profile from './components/Profile';
// import Profile from './core/Profile';
import Register from './components/Register';
import Payment from './components/Payment';



const Routes=()=>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/D_Login" exact component={Login_Doctor}/>
                <Route path="/H_Login" exact component={Login_Hospital}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path="/Payment" exact component={Payment}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;