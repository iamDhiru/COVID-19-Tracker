import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo1.jpg';

const NavBar = ()=>{
    return(
        <>
            <div className="container-fluid nav-bg border-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg  ">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/"><img  src={logo} alt="Logo"/></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link " aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link " aria-current="page" to="/symptoms">Symptoms</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link" to="/prevention">Prevention</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link " aria-current="page" to="/global">WorldCurrentLive</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link" to="/india">IndiaCurrentLive</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                   </nav>
                </div>
            </div>
            
        </>
    )
}


export default NavBar;