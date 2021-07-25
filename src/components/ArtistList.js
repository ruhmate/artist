import React from 'react'
import Artist from './Artist'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function ArtistList() {
  const { artistts, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (artistts.length < 1) {
    return (
      <h2 className='section-title'>
        no artists matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Artists and Events </h2>
      <div className='artists-center'>
        {artistts.map((item) => {
          debugger;
          return <Artist key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}