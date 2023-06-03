import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ArtsandMusic from './components/ArtsandMusic'
import Biography from './components/Biography'
import Business from './components/Business'
import Comic from './components/Comic'
import Cooking from './components/Cooking'
import Entertainment from './components/Entertainment'
import HealthandFitness from './components/HealthandFitness'
import History from './components/History'
import Horror from './components/Horror'
import Kids from './components/Kids'
import Medical from './components/Medical'
import Sports from './components/Sports'

import AllBooks from './components/AllBooks'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/ArtsandMusic" element={<ArtsandMusic />} />
          <Route path="/Biography" element={<Biography />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Comics" element={<Comic />} />
          <Route path="/Cooking" element={<Cooking />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/HealthandFitness" element={<HealthandFitness />} />
          <Route path="/History" element={<History />} />
          <Route path="/Horror" element={<Horror />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Medical" element={<Medical />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/allbooks" element={<AllBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
