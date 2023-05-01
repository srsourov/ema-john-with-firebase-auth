import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState("");
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        setError("");
        if (password !== confirm){
            setError("Your password didn't match")
            return;
        }
        else if (password.length < 6){
            setError("Your password must be more than 6 characters")
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className="button">
                    <input className='btn-submit' type="submit" value="Sign Up" />
                    <p><small>Already have an account? <Link className='new-acc-link' to="/login">Login Now</Link></small></p>
                </div>
                <p className='error-text'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;