import midi from '../assets/midi.jpeg'
import singer from '../assets/singer.jpeg'
import amp from '../assets/amp.jpeg'
import { ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="landing">
        <div className="overlay">
          <h1>Welome to South Florida's favorite house of music and art</h1>
          <Link to="/bookings">
            <Button className="booking-btn">Request your next session!</Button>
          </Link>
        </div>
      </section>

      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={amp} />
          <Card.Body>
            <Card.Title className="upcoming">Gear</Card.Title>
            <Card.Text>
              Gear is available upon request. Extra charge may apply.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Microphones</ListGroupItem>
            <ListGroupItem>Monitors and Consoles</ListGroupItem>
            <ListGroupItem>Guitar Pedals</ListGroupItem>
            <ListGroupItem>Drums, Guitars, and more</ListGroupItem>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={midi} />
          <Card.Body>
            <Card.Title className="upcoming">Rates</Card.Title>
            <Card.Text>Rates may vary depending on project.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>FULL DAY (10 hours) $1,500 card rate</ListGroupItem>
            <ListGroupItem>HALF DAY (5 hours) $750 card rate</ListGroupItem>
            <ListGroupItem>
              We are always happy to offer a studio tour if you'd like to see
              our space for yourself, listen to some previous work, and discuss
              your project in person.
            </ListGroupItem>
            <ListGroupItem>
              Book a session or call us at (561)251.7030 / email
              info@elixair.com.
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={singer} />
          <Card.Body>
            <Card.Title className="upcoming">Upcoming Events</Card.Title>
            <Card.Text>
              Let us know of your upcoming events to be promoted!
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Tand - Guanabanas 8/28/2021</ListGroupItem>
            <ListGroupItem>
              The Heavy Pets - Key Lime House 12/13/2021
            </ListGroupItem>
            <ListGroupItem>
              Umphreys Mcgee - The Fillmore 12/30/2021-1/2/2022
            </ListGroupItem>
            <ListGroupItem>
              Umphreys Mcgee - The Fillmore 12/30/2021-1/2/2022
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </>
  )
}

;<br />
