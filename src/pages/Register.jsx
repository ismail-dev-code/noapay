import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
    
        
        <div className="card bg-base-100 w-full mt-16 mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          <h1 className="text-3xl font-bold">Register here!</h1>
            <form>
              <label className="label">Full Name</label>
              <input type="text" name='name' className="input" placeholder="Your Name" />
              <label className="label">Photo URL</label>
              <input type="url" name='photo' className="input" placeholder="Photo URL" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <label className="label">Confirm Password</label>
              <input type="password" name='confirmPassword' className="input" placeholder="Confirm Password" />
              
              <button type='submit' className="btn btn-neutral bg-primary text-white border-none mt-4">Register</button>
            </form>
            <p>Already have an account? Please <Link className='text-error' to={'/login'}>Login</Link></p>
          </div>
        </div>
       
    );
};

export default Register;