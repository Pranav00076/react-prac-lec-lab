import React,{ useState } from 'react'
import Counter from './components/counter'
import RandomNums from './components/randomNums'
import Coordinates from './components/coordinates'
import Parent from './components/Parent'
import Tasks from './components/lab_question'
import StarRating from './components/stars'

function App() {
  return (
    <>
      <StarRating maxStars={10} />
    </>
  )
}

export default App
