import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Sajek from './components/Sajek/Sajek';
import Sreemongol from './components/Sreemongol/Sreemongol';
import Sundorbon from './components/Sundorbon/Sundorbon';

function App() {
    return (
        <Router className="App">

            <Header></Header>
            {/* <BookingForm></BookingForm> */}

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

                <Route path='*'>
                    <h1>Error 404</h1>
                    <h1>No Match Found</h1>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
