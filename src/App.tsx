import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { getMovies } from "features/movies/moviesSlice"

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className="App">
      <div className="container flex flex-wrap mx-auto max-w-6xl">
        {state.movies.error && (
          <span className="text-red-500">
            Error in movies state: {state.movies.error.message}
          </span>
        )}
        {state.movies.popularMovies.map((movie) => (
          <div className="p-4 w-1/4" key={movie.title}>
            <div className="w-full h-auto overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover object-center"
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.id.toString()}
              />
            </div>
            <h2 className="text-2xl">{movie.original_title}</h2>
            <span>
              <strong>Releast Date:</strong> {movie.release_date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
