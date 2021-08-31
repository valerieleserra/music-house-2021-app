import { useContext, useState } from 'react'
import { userContext } from '../App'
import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import firebase from 'firebase'
import firebaseConfig from '../config'
import 'firebase/auth' 

export default function Signup() {
  const { user, setUser } = useContext(userContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [projectName, setProjectName] = useState('')
  const [email, setEmail] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const newUser = (uid) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      project: projectName,
      email: email,
      password: password,
      uid,
    }
    fetch('https://music-house-api-vl-2.web.app/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data)
      })
      .catch((error) => alert(error))
  }
  function signUpAuth(event) {
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
    }
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        console.log(res.user)
        newUser(res.user.uid)
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      {!user && <Button className="home-signup" onClick={handleShow}>Sign Up</Button>}
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
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                placeholder="Enter your project or stage name"
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
            onClick={(e) => signUpAuth(e)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
