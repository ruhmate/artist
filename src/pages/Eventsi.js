import React from 'react'
import Loading from '../components/Loading'
import EventDetails from '../components/EventDetails'
import { useParams, Link } from 'react-router-dom'

export default function Eventdetailsi() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)

  const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    debugger;

    setLoading(true)
    async function getEvents() {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${id}/events?app_id=test&date=upcoming`
        )
        const eventData = await response.json()
        debugger;
        if (eventData) {
          setEvents(eventData);
        } else {
          setEvents(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    };

    getEvents()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!events) {
    return <h2 className='section-title'>no artists found to display</h2>
  } else {

    return (
      <section className='section artist-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        {
        <h2 className='section-title'>Events</h2>
        }
        {
                    events &&

                    events.map((event) => (
                        <EventDetails
                            key={event.id}
                            country={event.venue.country}
                            city={event.venue.city}
                            venue={event.venue.name}
                            date={event.datetime}
                        />
                    ))
                }
      </section>
    )
  }
}