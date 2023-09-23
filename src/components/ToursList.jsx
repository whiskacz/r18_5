import React from 'react'
import Tour from './Tour'

function ToursList({ data, removeTour }) {
  return (
    <>
    <Tour data={ data } removeTour={removeTour} />
    </>
  )
}

export default ToursList