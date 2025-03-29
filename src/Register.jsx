
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Register = () => {
  const {registerUser} = useContext(AuthContext);
  const handleRegister = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name, email, password)
      // create user
      registerUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error.message);
        })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
              <label className="fieldset-label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            {
              <p className="font-medium">Already Have an account? Please <Link to="/login">Login!</Link> </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;