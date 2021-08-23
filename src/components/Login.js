import React, { useContext, useState } from 'react'
import { AuthContext } from '../App'
import { Form, Button, Container } from 'react-bootstrap'
import firebase from 'firebase'

export default function Login() {
  const { user, setUser } = useContext(AuthContext)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  

  function loginAuth(e) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const item = JSON.stringify(res.user)
        localStorage.setItem('user', item)
        setUser(res.user)
      })
      .catch((error) => alert(error))
  }
  const logOut = () => {
    localStorage.clear()
    window.location.reload(false)
    firebase
      .auth()
      .signOut()
      .then((res) => {
        res.send('Signout Successful')
      })
      .catch((err) => alert(err))
  }
  return (
  <>
  <Container className='login'>
  {!user ? (
      <Button variant='light' onClick={Login}>
          Sign in
      </Button>):(
        <Button variant='light' onClick={logOut}>
            Sign Out
        </Button>
      )} 
  <Form onSubmit={() => loginAuth()}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  
  {/* <Button variant="primary" type="submit" onClick={() => loginAuth()}>
    
  </Button> */}
</Form>
</Container>
</>
  )}
