import React from 'react'
import { useState } from 'react'
import signup1 from '../assets/signup1.jpeg'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  return (
    <div className="container">
      <div className="form-container">
        <img src={signup1} alt="ea" />
        <div className="form">
          <h3>Sign In</h3>
          <div className="signup-underline"></div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary">
              <a href="/home" className="signin">
                SIGN IN
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
