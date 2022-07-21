/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/Authcontext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/homepage");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className='container'>
      <h1 className='logo-txt'>West World</h1>
      <div>
        <h1 className='login-text'>Sign in to your account</h1>
        <p className='login-text'>
          Don't have an account yet?{" "}
          <Link to='/signup' className=''>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='login-text'>
          <label className='label-text'>Email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            value={email}
            type='email'
          />
        </div>
        <div className=''>
          <label className='label-text'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            value={password}
            type='password'
          />
        </div>
        <button className='btn'>Sign In</button>
      </form>
      <div>
        <button
          className='btn-test-credentials'
          onClick={() => {
            setEmail("ayush@gmail.com");
            setPassword("314912");
          }}>
          Login with test credentials
        </button>
      </div>
    </div>
  );
}

export default Login;
