import React from 'react'
import ArtistList from '../components/ArtistList'
import SearchForm from '../components/SearchForm'
import Header from '../components/Header'
import Popular from '../components/Popular'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      <Popular/>
      <SearchForm />
      <ArtistList />
      <Footer/>
    </main>
  )
}