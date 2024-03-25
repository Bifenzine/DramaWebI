
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
  baseURL: "'https://api.themoviedb.org/3"
})

export const getMovies = () => moviesApi.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);


// eslint-disable-next-line no-undef
export const getMoviesDetail = () => moviesApi.get(`movie/${movie.id}?language=en-US`, options)
