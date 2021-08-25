import Button from 'react-bootstrap'
import image2 from '../assets/image2.jpeg'
import image4 from '../assets/image4.jpeg'

export default function Home() {
  return (
    <>
      <section className="landing">
        <div className="overlay">
          <h1>Welcome Home</h1>
          <p>Book your next session with us!</p>
        </div>
      </section>
      <h4>About</h4>
      <section className="about">
        <h3> Located in Delray Beach, Florida </h3>
        <div className="about-items">
          <div>
            <img src="" alt="" />
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              blanditiis minus velit quam exercitationem at minima dolorum
              obcaecati. Praesentium natus perferendis sint tenetur atque ex rem
              dicta odit dolor distinctio.
            </p>
          </div>

          <div>
            <img src={image2} alt="" />
            <h4>Gear</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              blanditiis minus velit quam exercitationem at minima dolorum
              obcaecati. Praesentium natus perferendis sint tenetur atque ex rem
              dicta odit dolor distinctio.
            </p>
          </div>

          <div>
            <img src={image4} alt="" />
            <h4>Upcoming Events</h4>
            <p>Share and promote your upcoming events once youve joined us!</p>
          </div>
          <button>book now</button>
        </div>
      </section>
    </>
  )
}
