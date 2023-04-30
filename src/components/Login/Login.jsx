import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const{googleSignIn}=useContext(AuthContext);
    // Handle Submit Form;


    // Signin with Google Account


    return (
        <div className='d-flex justify-content-center m-4'>
            <form className='border p-5'>
                <h3>Please Login to Access All</h3>
                <hr />
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" class="btn btn-primary w-50">Login</button>

                <div className='login-method text-center mt-3'>
                    <p>Don't have any account ? <Link className='signup' to="/register">Signup Now</Link> Or choose bellow</p>
                    <hr />
                    <div className='border p-2 mt-2'>
                        <span><FaGoogle /></span> <span className='ms-2 googleSignIn' onClick={googleSignIn}>Sign in with Google</span>
                    </div>
                    <div className='border p-2 mt-2'>
                        <span><FaGithub /></span> <span className='ms-2'>Sign in with Github</span>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Login;
