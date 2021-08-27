import { useEffect, useState, useContext } from 'react'
import { userContext } from '../App'


export default function MemberProfile() {

    const { user } = useContext(userContext)
    const [allBookingsWithEmail, setAllBookingsWithEmail] = useState('')

  
  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then((response) => response.json())
      .then((data) => setAllBookingsWithEmail(data))
      .catch((error) => console.log('error',error))
  }, [])
  

  
return(
    <>
        <div>
        const=bookings.map{email}
        <h1>These are all the bookings</h1>
        </div>
        </> 
            )}      

