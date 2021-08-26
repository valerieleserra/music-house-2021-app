import image3 from '../assets/image3.jpeg'
// import image2 from '../assets/image2.jpeg'
// import image4 from '../assets/image4.jpeg'
import { ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Home() {
 
  return (
    <>
      <section className="landing">
        <div className="overlay">
          <h1>Welome to South Florida's favorite house of music and art</h1>
          <Link to='/bookings' >
            <Button className="booking-btn" variant='outline-dark' size='lg'>Request your next session!</Button>
            </Link>
        </div>
      </section>

<div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Rates</Card.Title>
          <Card.Text>
            Rates available upon request.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Gear</Card.Title>
          <Card.Text>
          Some items listed may only be available on a rental basis for an additional rate. Please contact ahead to reserve.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Consoles</ListGroupItem>
          <ListGroupItem>Monitors and Amplification</ListGroupItem>
          <ListGroupItem>Microphones</ListGroupItem>
        </ListGroup>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Upcoming Events</Card.Title>
          <Card.Text>
           Let us know of your upcoming events to be promoted!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Tand - Guanabanas 8/28/2021</ListGroupItem>
          <ListGroupItem>The Heavy Pets - Key Lime House 12/13/2021</ListGroupItem>
          <ListGroupItem>Umphreys Mcgee - The Fillmore 12/30/2021-1/2/2022</ListGroupItem>
        </ListGroup>
      </Card>
  </div>
    </>
  )
}
