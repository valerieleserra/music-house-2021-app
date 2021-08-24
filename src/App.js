import React, { createContext, useState } from 'react'
import firebase from 'firebase'
import firebaseConfig from './config'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import About from './components/About'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MemberProfile from './pages/MemberProfile'

firebase.initializeApp(firebaseConfig)
const fbAuth = firebase.auth()

export const AuthContext = createContext('')

export default function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )
  
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser, fbAuth, firebase }}>
        <Header />
        <Switch>
        
  
          <Route path='member-profile' component={MemberProfile} />
          
          <Route path="/" component={Home} />
          <About />
          </Switch>
      </AuthContext.Provider>
    </Router>
  )
}
