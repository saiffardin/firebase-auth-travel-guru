import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import LogIn from '../Login/LogIn';
import SignUp from '../SignUp/SignUp';
import { handleGoogleLogin, initializeThirdPartyLoginFramework, handleFacebookLogin } from './ThirdPartySignInManager';

const LoginAndSignUp = () => {

    initializeThirdPartyLoginFramework();

    let [logInFlag, setLogInFlag] = useState(true);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/afterLogin" } };

    const toggle = (e) => {
        // e.stopPropagation();
        setLogInFlag(!logInFlag);
        console.log("toggle: ", logInFlag);

    }

    const styleThirdyParty = {
        border: '1px solid lightgray',
        width: '400px',
        margin: '30px auto',
        borderRadius: '50px',
        cursor: 'pointer',
        background: 'whitesmoke'
    }

    const fbHandler = () => {
        console.log('FB');
        handleFacebookLogin(history, from)
            .then((res) => {
                setLoggedInUser(res)
            })
    }


    const googleHandler = () => {
        console.log('Google');
        handleGoogleLogin(history, from)
            .then((res) => {
                setLoggedInUser(res)
            })
    }

    return (
        <div className="my-5">

            {logInFlag
                ?
                <LogIn>
                    <p className="pt-3 text-center">Don't have an account?
                    <span style={{ cursor: 'pointer', color: 'blue' }} onClick={toggle}> Create an account</span>
                    </p>
                </LogIn>
                :
                <SignUp>
                    <p className="pt-3 text-center">Already have an account?
                    <span style={{ cursor: 'pointer', color: 'blue' }} onClick={toggle}> Log In</span>
                    </p>
                </SignUp>
            }

            <h3 className='text-center my-4'>Or</h3>

            {/* FB */}
            <div style={styleThirdyParty} >
                <h5 className='my-2 mx-5' onClick={fbHandler}>
                    <img style={{ width: '40px' }} src={require('../../images/fb.png')} alt="" /> <span className="ml-3">Continue with Facebook</span>
                </h5>
            </div>

            {/* Google */}
            <div style={styleThirdyParty} >
                <h5 className='my-2 mx-5' onClick={googleHandler}>
                    <img style={{ width: '40px' }} src={require('../../images/google.png')} alt="" /> <span className="ml-3">Continue with Google</span>
                </h5>
            </div>

        </div>
    );
};

export default LoginAndSignUp;