import { useAppSelector } from "app/hooks"

interface PopularMoviesProps {
  title?: boolean
}

const PopularMovies = ({ title }: PopularMoviesProps) => {
  const state = useAppSelector((state) => state)

  return (
    <section className="my-8">
      {title && <h1 className="text-4xl mb-6">Popular Movies</h1>}
      {state.movies.error && (
        <span className="text-red-500">
          Error in movies state: {state.movies.error.message}
        </span>
      )}
      <div className="flex flex-wrap">
        {state.movies.popularMovies.map((movie) => (
          <div className="p-2 w-1/3 flex flex-col" key={movie.title}>
            <div className="w-full h-auto overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover object-center"
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.id.toString()}
              />
            </div>
            <h3 className="text-2xl">{movie.original_title}</h3>
            <span>
              <strong>Releast Date:</strong> {movie.release_date}
            </span>
            <div className="mt-6 flex-1">{movie.overview}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularMovies
