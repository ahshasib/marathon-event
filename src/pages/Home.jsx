import React from 'react'
import Slider from '../component/Slider'
import MarathonEvents from '../component/MarathonEvents'
import UpcomingRun from '../component/UpcomingRun'


const Home = () => {

  

  return (
    <>
    <div>
        <Slider></Slider>
    </div>
    <div>
      <MarathonEvents ></MarathonEvents>
    </div>
    <div>
      <UpcomingRun></UpcomingRun>
    </div>
    </>
  )
}

export default Home