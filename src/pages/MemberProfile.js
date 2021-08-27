// import { useState, useEffect } from "react"
// import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'

// export default function MemberProfile(){
//     const [ booking, getBooking ] = useState()
//     const {email} = useParams()

//     useEffect(() => {
//         fetch(`http://localhost:5000/bookings/${email}`)
//         .then((res) => res.json())
//         .then((data) => setData(json))
//         .catch((err) => console.error(err))
//     }, [email])
//     return (
//         <>
//         {!booking ? (
//             <p>Getting Profile Ready...</p>

//         ) : (
//             <Card>
//             <Card.Header><h1>{booking.email}</h1>
//             {booking.booked && <div className="booked"></div>}
//             </Card.Header>
//             <Card.Img className="imgDetail" variant="top" />
//             {booking.booked && <div className="adopted"></div>}
//             <Card.Body>
//               <Card.Text>
//                 <Card.Subtitle>email: {booking.email}</Card.Subtitle>
//                 <Card.Subtitle>Breed: {booking.time}</Card.Subtitle>
//                 <Card.Subtitle>Rescue: {booking.date}</Card.Subtitle>

//               </Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//       </>
//     )
//   }
