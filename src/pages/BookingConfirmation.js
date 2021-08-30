import image5 from '../assets/image5.png'

export default function BookingConfirmation() {
  return (
    <>
      <section className="sessionbooked">
        <h1> You're Booked! An agent will contact you shortly.</h1>
        <div className="confirm-img">
          <div className="confirm-body"></div>
          <img src={image5} alt="microphone" />
        </div>
      </section>
    </>
  )
}
