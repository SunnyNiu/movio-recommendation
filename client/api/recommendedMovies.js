import request from 'superagent'

export function getRecommendedMovies (movies) {
  const moviesJoinWithComma = movies.join(',')
  return request
    .get(`/recommendmovies/${moviesJoinWithComma}`)
    .then(response => response.body)
    .catch(() => {
      throw Error('You need to implement an API route for /movies/recommendmovies')
    })
}
