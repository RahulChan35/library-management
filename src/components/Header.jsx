import React from 'react'
import logo from '../assets/logo.jpeg'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/igiy">
            <img src={logo} height="50" alt="MDB Logo" loading="lazy" />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link alls" href="/allbooks">
                All Books
              </a>
            </li>
          </ul>

          <form className="d-flex input-group w-auto">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link signup" href="/signup">
                  Sign up
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link signin" href="/signin">
                  Sign In
                </a>
              </li>
            </ul>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search by categories"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <Icon.Search />
            </span>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Header
