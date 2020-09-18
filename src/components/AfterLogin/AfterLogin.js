import React from 'react';
import { useHistory } from 'react-router-dom';
import RoomDemo from '../RoomDemo/RoomDemo';

const AfterLogin = () => {

    let history = useHistory();

    console.log('dest : ',history);

    return (
        <div>
            <h1 className="m-3">After Login Page</h1>
            <RoomDemo></RoomDemo>
            
        </div>
    );
};

export default AfterLogin;