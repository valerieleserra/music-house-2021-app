import { useContext, useState } from 'react'
import { AuthContext } from '../App'
import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import firebase from 'firebase'

export default function Signup() {
  const { user, setUser } = useContext(AuthContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const newUser = (e) => {
    e.preventDefault()
    console.log('Signing up user!')
    const formValues = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    }
    fetch('https://localhost3000.com', {
      method: 'POST',
      body: JSON.stringify(formValues),
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
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      &nbsp;
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      &nbsp;
      <FloatingLabel controlId="firstName" label="First Name">
        <Form.Control type="firstName" placeholder="firstName" />
      </FloatingLabel>
      &nbsp;
      <FloatingLabel controlId="lastName" label="Last Name">
        <Form.Control type="lastName" placeholder="lastName" />
      </FloatingLabel>
      &nbsp;
      <Button variant="link">Submit</Button>
    </>
  )
}
