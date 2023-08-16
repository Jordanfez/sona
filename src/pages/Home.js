import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='home'>
          <div className='content'>
            <h2>Sona A Luxury Hotel</h2>
            <p className='par'>Here are the best hotel booking sites, including recommendations for <br /> international travel and for finding low-priced hotel rooms.</p>
            <button className='cn'>DISCOVER NOW</button>
          </div>
          <div className='form'>
            <h2>Booking Your Hotel</h2>
            <p>Check In:</p>
            <input type="text" className='' placeholder='put the date in' />
            <p>Check Out:</p>
            <input type="text" className='' placeholder='put the date Out' />
            <p>Guests:</p>
            <input type="text" className='' placeholder='number of Guests' />
            <p>Room:</p>
            <input type="text" className='' placeholder='number of Room' />
            <button className='valid'>CHECK AVAILABILITY</button>
          </div>
     </div>
    </>
  )
}

export default Home
