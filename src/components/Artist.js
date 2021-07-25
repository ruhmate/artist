import React from 'react'
import { Link } from 'react-router-dom'
export default function Artists({ image, name, id, tracker,count }) {
  return (
    <article className='artisti'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='artist-footer'>
      <h3>{name}</h3>
      <h4>Artist ID: {id}</h4>
     <p>Tracker Count: {tracker}</p>
      <p>Upcoming Event Count: {count}</p>
        <Link to={`/artisti/${name}`} className='btn btn-primary btn-details'>
          events
        </Link>
      </div>
    </article>
  )
}