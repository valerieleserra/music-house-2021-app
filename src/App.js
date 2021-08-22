import firebase from 'firebase'
import firebaseConfig from './config'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import React, { createContext, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig)
const fbAuth = firebase.auth()

export const AuthContext = createContext('')

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  return (
    
    <Router>
      <AuthContext.Provider value={{ user, setUser, fbAuth, firebase }}>
      <Header />
      <Switch>
          <Home />
        <Route path='/' component = {Home}></Route>
        <Route path='/login' component = {Login}></Route>
        <Route path='/signup' component = {Signup}></Route>
        <Signup/>
        <Login/>
        
    </Switch>
    </AuthContext.Provider>
  </Router>

  )
}
