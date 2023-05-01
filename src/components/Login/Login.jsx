import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {


    const [showPassword, setshowPassword] =  useState(false);


    const [error, setError] = useState("")
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            setError(error.message);
            console.log(error)
        })
    }

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="" required />
                    <p onClick={() => setshowPassword(!showPassword)}><small>
                            {
                                showPassword ? <span>Hide Password</span> : <span>Show password</span>
                            }
                        </small></p>
                </div>
                <div className="button">
                    <input className='btn-submit' type="submit" value="Login" />
                    <p><small>New to Ema John? <Link className='new-acc-link' to="/signup">Create New Account</Link></small></p>
                </div>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default Login;