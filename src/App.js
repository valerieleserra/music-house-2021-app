import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Bookings from './components/Bookings'
import BookingConfirmation from './pages/BookingConfirmation'
import MemberProfile from './pages/MemberProfile'
import AboutUs from './pages/AboutUs'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import 'firebase/auth' 

import firebase from 'firebase'
import firebaseConfig from './config'

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export const userContext = createContext(null)

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )
  const fbUser = firebase.auth().currentUser
  useEffect(() => {
    setUser(firebase.auth().currentUser)
  }, [fbUser])

  return (
    <userContext.Provider value={{ user, setUser}}>
      <Router>
        <Header />

        <Switch>
          <Route path="/bookings" component={Bookings} />
          
          <Route path="/bookingconfirmation" component={BookingConfirmation} />
          
          <Route exact path="/memberprofile" component={MemberProfile} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
    </userContext.Provider>
  )
}
