import React, { useEffect } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import AddNewFilm from './AddNewFilm'

function App() {
  const [movie, setMovie] = useState([])

  useEffect(() => {}, [])

  return (
    <>
      <Header />
      <br />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
