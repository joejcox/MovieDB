import { useEffect } from "react"
import { useAppDispatch } from "app/hooks"
import { getMovies } from "features/movies/moviesSlice"
import { Routes, Route, Link } from "react-router-dom"
import Home from "pages/Home"
import Popular from "pages/Popular"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className="App">
      <header className="w-full mb-8">
        <div className="container mx-auto flex justify-end max-w-6xl items-center">
          <nav>
            <Link to="/" className="inline-block px-6 py-4 hover:bg-gray-200">
              Home
            </Link>
            <Link
              to="/popular-movies"
              className="inline-block px-6 py-4 hover:bg-gray-200"
            >
              Popular Movies
            </Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-movies" element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App
