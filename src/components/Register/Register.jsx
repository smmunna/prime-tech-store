import React from 'react';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

      // Handle Submit Form;
      const handleOnsubmit = (event)=>{
        event.preventDefault();
        toast("Please Signin with Google, Others are not Implemented yet !!");
    }

    return (
        <div className='d-flex justify-content-center mt-2'>
            <form onSubmit={handleOnsubmit} className='border p-5 mb-5'>
                <h3>Please Register to Access All</h3>
                <hr />
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary w-50">Register</button>
                <ToastContainer />
            </form>
        </div>
    );
}

export default Register;
