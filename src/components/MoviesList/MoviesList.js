import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import './moviesList.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { searchValueContext } from '../useContextVariable/searchValueContext';
import { getMovies } from '../../data/FetchingDataAxios';
import { Spinner } from '@chakra-ui/react'




const MoviesList = () => {



  const { searchValue, setSearchValue } = useContext(searchValueContext)




  const [MoviesList, setMoviesList] = useState([]);
  const [dataMoviesList, setDataMoviesList] = useState([]);

  //const [isFetching, setIsFetching] = useState(true)


  useEffect(() => {
    getMovies().then((response) => {
      // console.log(response)
      setMoviesList(response.data.results.filter((movie) => movie.title.toLowerCase().includes(searchValue)));
      // console.log(response.results)
      setDataMoviesList(response.data.results)

    })

      .catch((erreur) => {
        alert("erreur fetching Data")
        console.log(erreur)


      })


  }, [searchValue])

  if (!MoviesList) {
    return <div className='loading mx-auto animate-bounce text-center absolute right-[630px] top-72 dark:text-white'><Spinner size='xl' color='black' /></div>;
  }

  return (





    <div className='moviesList flex flex-wrap justify-around items-center border dark:border-slate-600 dark:bg-slate-800 p-4 rounded-lg '>

      {MoviesList.map((movie , index) =>
      (

        <div className='mb-4'key={index}>
          <Link className=' bg-transparent  rounded-lg  '  to={`/Movie_Detail/${movie.id}`} >
            <div className="relative flex w-40 h-64 flex-col bg-transparent bg-clip-border text-gray-700 shadow-gray-300 dark:shadow-slate-600 shadow-lg rounded-lg">
              <div className='movieList__card-rating flex items-center gap-1 p-1 justify-end text-white border-1 right-0 top-0 absolute w-14 z-10 rounded-bl-2xl bg-gradient-to-t from-black to-transparent '><span><FontAwesomeIcon icon={faStar} color='yellow' /> {movie.vote_average}</span></div>
              <img className='movieList__card-pic absolute h-full hover:opacity-80 w-full object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
              <div className='movieList__card-name_release_date text-white rounded-md grid  p-1 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-black to-transparent h-16 '>
                <Tooltip disableTouchListener title={movie.title}>
                  <span className='movieList__span-name truncate'>{movie.title}</span>
                </Tooltip>
                <span className='movieList__span-release-date flex justify-end'>{movie.release_date.substring(0, 4)}</span>
              </div>
            </div>
          </Link>
        </div>
      )
      )}

    </div>
  )
}

export default MoviesList




