import React from 'react'
import Movies from './Movies'
import Header from './Header'
import AddNewFilm from './AddNewFilm'

export default function App() {
  return (
    <>
      <Header />
      <AddNewFilm />
      <section className="main">
        <br />
        <Movies />
      </section>
    </>
  )
}
