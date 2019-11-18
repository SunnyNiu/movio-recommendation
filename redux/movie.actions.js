import { searchMovie } from './movie.types'

function updateMovieId (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

// async
export function fetchMovie (moviesId) {
  return function (dispatch) {
    return fetch(`/movie/${moviesId}`)
      .then(resp => resp.json())
      .then((body) => dispatch(updateMovieId(body)))
  }
}

function likeMovie (genres) {
  return {
    type: searchMovie.LIKE_MOVIE,
    genres
  }
}

function dislikeMovie (genres) {
  return {
    type: searchMovie.DISLIKE_MOVIE,
    genres
  }
}

// async
export function fetchMovieGenresByMovieId (movieId, option) {
  return function (dispatch) {
    return fetch(`/movieGenres/${movieId}`)
      .then(resp => resp.json())
      .then((body) => (
        `${option}` === 'like' ? dispatch(likeMovie(body)) : dispatch(dislikeMovie(body))
      ))
  }
}

// async
export function fetchRecommendMovies (genre) {
  // console.log('option', option)
  return function (dispatch) {
    return fetch(`/recommendation/${genre}`)
      .then(resp => resp.json())
      .then((body) => {
        console.log('body recommend movies', body)
        dispatch(updateMovieId(body[0]))
      })
  }
}

// async
export function fetchRecommendMoviesNotInShowedBefore (genre, moviesId) {
  // console.log('option', option)
  console.log('moviesId', moviesId)
  const moviesIds = moviesId.join(',')
  console.log(moviesIds, 'here fetch not include showed before')
  return function (dispatch) {
    return fetch(`/recommendation/${genre}/${moviesIds}`)
      .then(resp => resp.json())
      .then((body) => {
        console.log('body recommend movies', body)
        dispatch(updateMovieId(body[0]))
      })
  }
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE
})
