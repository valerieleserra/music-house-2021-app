import React, { createContext, useState } from 'react'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Bookings from './components/Bookings'
import Clients from './pages/Clients'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookingConfirmation from './pages/BookingConfirmation'
import MemberProfile from './pages/MemberProfile'

import firebase from 'firebase'
import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig)
const fbAuth = firebase.auth()

export const userContext = createContext(null)

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  return (
    <userContext.Provider value={{ user, setUser, fbAuth, firebase }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/bookings" component={Bookings}/>
          <Route path="/bookingconfirmation" component={BookingConfirmation}/>
          <Route exact path="/memberprofile" component={MemberProfile} />
          <Route exact path="/clients" component={Clients} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </userContext.Provider>
  )
}
