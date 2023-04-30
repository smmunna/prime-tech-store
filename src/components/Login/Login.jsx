import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleSignIn, loading, user } = useContext(AuthContext);
    // Handle Submit Form;
    const handleOnsubmit = (event)=>{
        event.preventDefault();
        toast("Please Signin with Google, Others are not Implemented yet !!");
    }


    let from = location.state?.from?.pathname || "/";

    // Signin with Google Account
    if (loading) {
        return <div></div>
    }
    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true })
        }
    }, [user])


    return (
        <div className='d-flex justify-content-center m-4'>
            <form onSubmit={handleOnsubmit} className='border p-5'>
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
                <ToastContainer />
            </form>
        </div>

    );
}

export default Login;
