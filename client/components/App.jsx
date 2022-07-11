import React from 'react'
import Movies from './Movies'
import Header from './Header'

export default function App() {
  return (
    <>
      <Header />
      <section className="main">
        <Movies />
      </section>
    </>
  )
}
