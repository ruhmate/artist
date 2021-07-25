import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'


const artistUrl = 'https://rest.bandsintown.com/artists'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [artistts, setArtists] = useState([])

  const fetchArtists = useCallback( async () => {
    setLoading(true)
    try {
      // const response = await fetch(`${url}${searchTerm}`)
      const response = await fetch(`${artistUrl}/${searchTerm}/?app_id=asd`)
      

      const data = await response.json()
      debugger;
      console.log(data);
      const artistData = data
      if (artistData) {
        const events = [];
        const eventsResponse = await fetch(`${artistUrl}/${searchTerm}/events?app_id=test&date=all`)
        const eventData = await eventsResponse.json()
        if(eventData){
          eventData.map((item) => {
            let event = {
              name : item.venue.name,
              country: item.venue.country,
              city : item.venue.city,
              date : item.datetime,
            }
            events.push(event);
          });
        }
        
        const artist = [{
              id: 1,
              name: artistData.name,
              image: artistData.image_url,
              tracker: artistData.tracker_count,
              id: artistData.id,
              count: artistData.upcoming_event_count,
              events: events
            }];
        setArtists(artist)
      } else {
        setArtists([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchArtists()
  }, [searchTerm,fetchArtists])
  return (
    <AppContext.Provider
      value={{ loading, artistts, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }