/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/Authcontext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/homepage");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <h1 className='logo-txt'>West World</h1>
      <div>
        <h1 className=''>Sign up for a free account</h1>
        <p className=''>
          Already have an account yet?{" "}
          <Link to='/' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className='form-signup'>
        <div className='login-text'>
          <label className='label-text'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            type='email'
          />
        </div>
        <div className='login-text'>
          <label className='label-text'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            type='password'
          />
        </div>
        <button className='btn'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
