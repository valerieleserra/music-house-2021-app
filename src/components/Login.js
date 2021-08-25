import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import { Form, Button, Modal } from 'react-bootstrap'
import firebase from 'firebase'

export default function Login() {
  const { user, setUser } = useContext(userContext)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
        console.log('Logged in')
        res.send('Login successful')
      })
      .catch((err) => alert(err))
  }
  return (
    <>
      {!user ? (
        <Button variant="light" onClick={handleShow}>
          Login
        </Button>
      ) : (
        <Button variant="light" onClick={logOut}>
          Logout
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={(e) => loginAuth(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            &nbsp;
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onSubmit={(e) => loginAuth(e)}
            onClick={(e) => (window.location.href = '/home')}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
