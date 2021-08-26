import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
// import firebase from 'firebase'

export default function Bookings() {
  const [email, setEmail] = useState('')
  const [projectName, setProjectName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  let history = useHistory()


  const newBooking = (e) => {
    e.preventDefault()
    const new_booking = {
      email: email,
      project: projectName,
      date: date,
      time: time,
    }

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(new_booking),
    })
      .then((response) => response.json())
      .then(() => {
        history.push('/bookingconfirmation')
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <Container className="booking-container">
        <Form onSubmit={newBooking}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter email address here"
            />
          </Form.Group>
          &nbsp;
          <Form.Group className="mb-3" controlId="formBasicProjectName">
            <Form.Label>Project or Stage Name</Form.Label>
            <Form.Control
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
              placeholder="Enter project or stage name"
            />
          </Form.Group>
          &nbsp;
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Enter date for session"
            />
          </Form.Group>
          &nbsp;
          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              placeholder="Enter time for session"
            />
          </Form.Group>
          &nbsp;
          <Button onClick={newBooking} htmlType="submit">Request Booking</Button>
        </Form>
      </Container>
    </>
  )
}
