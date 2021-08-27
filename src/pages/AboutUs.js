import dee from '../assets/dee.png'

export default function AboutUs() {
  return (
    <>
      <div className="about-title"> About Us</div>
      &nbsp;
      <p className="about-p">
        Multiple purpose media house where everyone from single streamers, large
        and small bands, and even movie and sound editors can have a space to
        create in. We have multiple size rooms to choose from based on what your
        project requires, we will have almost all the equipment available in
        each room that you might need. You’ll have options to subscribe to our
        content house via daily, monthly, or yearly rates. We can also provide
        storage lockers for an extra cost if you’re frequent enough and don’t
        want to haul your gear in every time. If you’re in need of an
        audio/video engineer, producer or consulting on your project we can also
        provide that for an extra cost to your subscription. Everything is ran
        through our app, from payments, to booking, to linking up with other
        creators.{' '}
      </p>
      <section className="aboutus-container-h2">
        <h2>Our Team</h2>
        <div>
          <h3>Nikolas Dee</h3>
          <img src={dee} alt="up up close of man" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>
      </section>
    </>
  )
}
