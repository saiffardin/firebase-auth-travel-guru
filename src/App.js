import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import './App.css';
import AfterLogin from './components/AfterLogin/AfterLogin';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LogIn from './components/Login/LogIn';
import LoginAndSignUp from './components/LoginAndSignUp/LoginAndSignUp';
import Sajek from './components/Sajek/Sajek';
import SignUp from './components/SignUp/SignUp';
import Sreemongol from './components/Sreemongol/Sreemongol';
import Sundorbon from './components/Sundorbon/Sundorbon';




export const UserContext = createContext();


function App() {

    const [loggedInUser, setLoggedInUser] = useState({});


    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

            <Router className="App">

                <Header></Header>
                {/* <LogIn></LogIn> */}
                {/* <SignUp></SignUp> */}


                <Switch>
                    <Route exact path='/'>
                        <HomePage></HomePage>
                    </Route>

                    <Route path='/sajek'>
                        <Sajek></Sajek>
                    </Route>

                    <Route path='/sreemongol'>
                        <Sreemongol></Sreemongol>
                    </Route>

                    <Route path='/sundorbon'>
                        <Sundorbon></Sundorbon>
                    </Route>

                    <Route path='/logInAndSignUp'>
                        <LoginAndSignUp></LoginAndSignUp>
                    </Route>

                    <Route path='/afterLogin'>
                        <AfterLogin></AfterLogin>
                    </Route>

                    <Route path='*'>
                        <h1>Error 404</h1>
                        <h1>No Match Found</h1>
                    </Route>

                </Switch>

            </Router>
        </UserContext.Provider>
    );
}

export default App;
