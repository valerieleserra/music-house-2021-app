import dee from '../assets/dee.png'
import team1 from '../assets/team1.png'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function AboutUs() {
  return (
    <>
      <div className="about-title"> About Us</div>
      &nbsp;
      <p className="about-body">
        Multiple purpose media house where everyone from single streamers, large
        and small bands, and sound engineers can have a space to
        create in.  We will have almost all the equipment available in
        each room that you might need. If you’re in need of an
        audio/video engineer, producer or consulting on your project we can also
        provide that for an extra cost. Everything is ran
        through our website, from booking, to linking up with other
        creators.</p>
      

        <h2 className="team"> Our Team </h2>
<Container className="about-team">
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={dee} />
  <Card.Body>
    <Card.Title>Nikolas Dee</Card.Title>
    <Card.Text>
      Sound Engineer and Consulting
    </Card.Text>
  </Card.Body>
</Card>
&nbsp;
<Card className="team1" style={{ width: '15rem' }}>
  <Card.Img variant="top" src={team1} />
  <Card.Body>
    <Card.Title>Samantha Torres</Card.Title>
    <Card.Text>
      Project and Studio Management
    </Card.Text>
  </Card.Body>
</Card>
</Container>
    </>
  )
}
