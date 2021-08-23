import { useContext, useState } from 'react'
import { AuthContext } from '../App'
import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import firebase from 'firebase'

export default function Signup() {
  const { user, setUser } = useContext(AuthContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const newUser = (e) => {
    console.log('Signing up user!')
    const user = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    }
    fetch('https://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => console.log('json -->', json))
      .catch((error) => alert(error))
  }
  function signUpAuth(e) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const item = JSON.stringify(res.user)
        localStorage.setItem('user', item)
        setUser(res.user)
        newUser(res.user.uid)
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      {!user && (
        <Button variant='light' onClick={handleShow}>Sign in</Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => signUpAuth(e)}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            &nbsp;
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            &nbsp;
            <Form.Group className="mb-3" controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter your project or stage name here."
              />
            </Form.Group>
            &nbsp;
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
            &nbsp;
            
          </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button
              variant="primary"
              type="submit"
              onSubmit={(e) => signUpAuth(e)}
              onClick={(e) => window.location.href = '/home'}
            >
              Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
