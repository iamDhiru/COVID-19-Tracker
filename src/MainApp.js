import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './navComponents/Home';
import About from './navComponents/About';
import India from './navComponents/India';
import NavBar from './navComponents/NavBar';
import Global from './navComponents/Global';
import Prevention from './navComponents/Prevention';
import Symptoms from './navComponents/Symptoms';
import Contact from './navComponents/Contact';
import './MainApp.css';
const MainApp = ()=>{

    return(
        <>
        <NavBar/> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/symptoms" component={Symptoms}/>
                <Route exact path="/prevention" component={Prevention}/>
                <Route exact path="/global" component={Global}/>
                <Route exact path="/india" component={India}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </Switch>
        </>
        )
}

export default MainApp;