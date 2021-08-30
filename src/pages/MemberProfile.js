import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

export default function MemberProfile() {
  const [allBookingsWithEmail, setAllBookingsWithEmail] = useState([])

  useEffect(() => {
    fetch(`https://music-house-api-vl-2.web.app/bookings`)
      .then((response) => response.json())
      .then((data) => setAllBookingsWithEmail(data))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <h1 className="all-bkns-title">All Bookings</h1>
      {allBookingsWithEmail.map((booking) => {
        return (
          <Container className='container'>
            <Table responsive="sm" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{booking.email}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.projectName}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        )
      })}
    </>
  )
}
