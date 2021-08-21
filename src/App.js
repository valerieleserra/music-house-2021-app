import firebase from 'firebase'
import firebaseConfig from './config'
import Signup from './pages/Signup'
import { BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { createContext, useState } from 'react'
// import '../src/App.css'

firebase.initializeApp(firebaseConfig)
const fbAuth = firebase.auth()

export const AuthContext = createContext('')

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  return (
    <BrowserRouter>
    <Router>
      <AuthContext.Provider value={{ user, setUser, fbAuth, firebase }} //user logged in for all pages
      >
      <Header />
      <Switch>
        <Route path='/' component = {Signup}>
          <Signup  />
          <Home />
        </Route>
    </Switch>
    </AuthContext.Provider>
  </Router>
</BrowserRouter>
  )
}
