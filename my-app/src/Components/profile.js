import React, { useEffect,Component, useState} from 'react';
import {Form, Card, Button, Tab, Tabs} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './profile.css';
import users from './Users.json';


function profileDetails(props){
    //const identity =  props.location.pathname
    let varPar = (props.location.pathname).split('/')
    const id = varPar[2]
    console.log("Ideee", varPar[2])
    const identity = parseInt(id)

    const nameUser = (id) => users.map(user => {
        if (id === user.id) {
            return (user.username)
        }
    })

    const nameOf = (id) => users.map(user => {
        if (id === user.id) {
            return (user.name)
        }
    })

    const emailUser = (id) => users.map(user => {
        if (id === user.id) {
            return (user.email)
        }
    })

    const dobUser = (id) => users.map(user => {
        if (id === user.id) {
            return (user.dateofbirth)
        }
    })

    const ifNotLogged = () => {
        console.log("In here", localStorage.getItem("id"))
        
        return (
        <Link to={{pathname: `/SignUp`}}>
            <button type="button" class="btn btn-outline-primary buttonLog">
                Signup
            </button>
        </Link>)
    }

    const ifLogged = () => {
        console.log("In here", localStorage.getItem("id"))
        
        return(
        <Link to={{pathname: `/`}}>
            <button type="button" class="btn btn-outline-primary buttonLog">
                Logout
            </button>
            {localStorage.clear()}
        </Link>)
        
    }

    return(
        <div>
            <div><img className = "profileImage" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar"/></div>

            <ul className="navbar-nav userName">
                <li>
                    <div class="userName"> {nameOf(identity)} </div>
                </li>
                <li>
                    {ifLogged()}
                    {ifNotLogged()}
                </li>
            </ul>

            <Row>
                <nav>
                    <div class="nav nav-tabs nav-fill line">
                        <div class="nav-item nav-link colorMus">Profile</div>
                        <div class="nav-item nav-link">Watchlist</div>
                        <div class="nav-item nav-link">Customlist</div>
                        <div class="nav-item nav-link">History</div>
                    </div>
                </nav>
            </Row>

            <div className="backBox">
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Username: {nameUser(identity)}
                        <button type="button" class="btn btn-outline-primary buttonUser"> Change Username</button>
                    </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Email: {emailUser(identity)}
                        <button type="button" class="btn btn-outline-primary buttonEmail"> Change Email</button>
                    </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Password:
                        <button type="button" class="btn btn-outline-primary buttonUser"> Change Password</button>
                    </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Date of Birth: {dobUser(identity)}
                    </div>
                        
                    </Col>
                </Row>
            </div>
            

        </div>

    )
};
export default profileDetails;
