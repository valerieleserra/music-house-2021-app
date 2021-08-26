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
            <Button variant='outline-dark' size='lg'  className="booking-btn">Request your next session!</Button>
            </Link>
        </div>
      </section>

<div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Available Rooms</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
          <Card.Title>Upcoming Events</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card>
  </div>
    </>
  )
}
