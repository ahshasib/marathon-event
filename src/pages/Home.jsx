import React from 'react'
import Slider from '../component/Slider'
import MarathonEvents from '../component/MarathonEvents'
import UpcomingRun from '../component/UpcomingRun'
import CountdownTimer from '../component/CountdownTimer'
import TrainingResources from '../component/TrainingResources'
import Leaderboard from '../component/Leaderboard'
import { Helmet } from 'react-helmet-async';
import CounterSection from '../component/CounterSection'

const Home = () => {

  

  return (
    <>
     <Helmet>
        <title>Home | MarathonMate</title>
      </Helmet>
    <div >
        <Slider></Slider>
    </div>
    <div>
      <CounterSection></CounterSection>
    </div>
    <div>
      <MarathonEvents ></MarathonEvents>
    </div>
    <div>
      <UpcomingRun></UpcomingRun>
    </div>
    <div>
    <TrainingResources></TrainingResources>
    </div>
    <div>
      <Leaderboard></Leaderboard>
    </div>
    </>
  )
}

export default Home