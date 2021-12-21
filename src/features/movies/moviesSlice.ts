import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

interface PopularMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface SliceState {
  popularMovies: PopularMovie[]
  error?: Error
}

interface PopularMoviesResponse {
  page: number
  results: PopularMovie[]
}

export const getMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async () => {
    return await axios
      .get<PopularMoviesResponse>(
        "https://api.themoviedb.org/3/movie/popular?api_key=420d65780c87c94ebb617b1496fdd416&language=en-US&page=1"
      )
      .then((response) => response.data.results)
      .catch((error: Error) => error)
  }
)

const initialState: SliceState = {
  popularMovies: [],
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getMovies.fulfilled, (state, action) => {
      // Add user to the state array
      if (action.payload instanceof Error) {
        state.error = action.payload
        return state
      }
      action.payload.forEach((movie) => state.popularMovies.push(movie))

      return state
    })
  },
})

// export const { getAllMovies } = moviesSlice.actions

export const movies = (state: SliceState) => state.popularMovies

export default moviesSlice.reducer
