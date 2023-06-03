import React from 'react'
import { useState } from 'react'
import signup1 from '../assets/signup1.jpeg'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="container">
      <div className="form-container">
        <img src={signup1} alt="afaewf" />
        <div className="form">
          <h3>Sign Up</h3>
          <div className="signup-underline"></div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="btn btn-primary">
              <a href="/signin" className="signup">
                SIGN UP
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
