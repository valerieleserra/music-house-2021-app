import React from 'react'
import image2 from '../assets/image2.jpeg'


export default function About(){
    return (
        <>
        <h4>About</h4>
            <section className='about'>
                <h3> Located in Delray Beach, Florida </h3>
                <div className='about-items'>
                    <div>
                        <img src='' alt=''/>
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, 
                            blanditiis minus velit quam exercitationem at minima dolorum obcaecati. 
                            Praesentium natus perferendis sint tenetur atque ex rem dicta odit dolor distinctio.</p>
                    </div>

                    <div>
                        <img src={image2} alt=''/>
                        <h4>Gear</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, 
                            blanditiis minus velit quam exercitationem at minima dolorum obcaecati. 
                            Praesentium natus perferendis sint tenetur atque ex rem dicta odit dolor distinctio.</p>
                    </div>

                    <div>
                        <img src='' alt=''/>
                        <h4>Upcoming Events</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, 
                            blanditiis minus velit quam exercitationem at minima dolorum obcaecati. 
                            Praesentium natus perferendis sint tenetur atque ex rem dicta odit dolor distinctio.</p>
                    </div>

                </div>
            </section>
        </>
    )
}