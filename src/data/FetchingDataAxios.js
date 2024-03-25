
import axios from "axios";

// const moviesApi = axios.create({
//   baseURL: "http://localhost:3003"
// })

// export const getMovies = () => moviesApi.get("/movies")


// export const deleteMovies = (id) => { return moviesApi.delete(`/movies/${id}`) }


// export const checkMovies = (movie) => moviesApi.patch(`/movies/${movie.id}`, { stat: !movie.stat });


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU1NDhiOTk2NjM2ZGRmOTBiYWJjNTVkNDI0ZDYzYyIsInN1YiI6IjYwMDA0NGI1N2Q1ZGI1MDAzZWNhYWNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kd3yo-Hsky3usHgAEo3ena6_bRkaEk6jWYTbaG9JqcE'
  }
};

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

//get popular Movies

export const getMovies = () => moviesApi.get('/discover/movie?language=en-US&page=1&sort_by=popularity.desc', options);

//getLatestMovies
// export const getLatestMovies = () => moviesApi.get('/movie/latest', options);


// eslint-disable-next-line no-undef
export const getMoviesDetail = (movieid) => moviesApi.get(`/movie/${movieid}??append_to_response=videos,credits`, options)

//get cast for each movie

export const getCastForEachMovie = (movieid) => moviesApi.get(`/movie/${movieid}/credits?language=en-US`, options)

//get Persons

export const getDetailPerson = (artistId) => moviesApi.get(`/person/${artistId}?language=en-US`, options)

//get Persons movie credits

export const getDetailPersonAndMoviesCredits = (artistId) => moviesApi.get(`/person/${artistId}/movie_credits?language=en-US`, options)

//get Persons series credits

export const getDetailPersonAndSeriesCredits = (artistId) => moviesApi.get(`/person/${artistId}/tv_credits?language=en-US`, options)



//get Videos

export const getMovieVideo = (movieid) => moviesApi.get(`/movie/${movieid}/videos?language=en-US`, options)

//getMovie Recommendations

export const getMovieRecommendations = (movieid) => moviesApi.get(`/movie/${movieid}/recommendations?language=en-US`, options)

//getSeries
export const getSeries = () => moviesApi.get(`/tv?language=en-US`, options)

//getSeriesDetails
export const getSeriesDetails = (serieID) => moviesApi.get(`/tv/${serieID}?append_to_response=videos,credits`, options)

// series credits 
// export const  getSeriesCredits = (serieID) => moviesApi.get(`/tv/${serieID}/credits`)

//series airing Today

export const getSeriesAiringToday = () => moviesApi.get(`/tv/airing_today?language=en-US`, options)

//Trending series

export const getTrendingSeries = () => moviesApi.get('/trending/tv/day', options)

//recommendations series

export const getSeriesRecommendations = (serieID) => moviesApi.get(`/tv/${serieID}/recommendations`, options)

//on air series

export const getOnAirSeries = () => moviesApi.get('/tv/on_the_air', options)

//Populer series

export const getPopulerSeries = () => moviesApi.get('/tv/popular', options)

//popular movies 

export const getPopularMovies = () => moviesApi.get('https://api.themoviedb.org/3/movie/now_playing', options)

//top rated movies 

export const getTopRatedMovies = () => moviesApi.get('https://api.themoviedb.org/3/movie/top_rated', options)

//upcoming movies movies 

export const getUpcomingMovies = () => moviesApi.get('https://api.themoviedb.org/3/movie/upcoming', options)

// Trending people
export const getPopularPeople = () => moviesApi.get('https://api.themoviedb.org/3/trending/person/day', options)






