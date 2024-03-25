import React, { useEffect, useState } from 'react'
import './seriesDetail.css'
import Tooltip from '@mui/material/Tooltip'
import Rating from '@mui/material/Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlackboard, faCalendarAlt, faClock, faPersonCircleCheck, faPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { getMoviesDetail, getSeries, getSeriesDetails } from '../../data/FetchingDataAxios'

import CastsAndCrew from '../CastsAndCrew/CastsAndCrew'
import ReviewsForEachFilm from '../ReviewsForEachFilm/ReviewsForEachFilm'
import Recommendations from '../../Features/Recommendations'
import { Spinner } from '@chakra-ui/react'
import SeriesRecommendations from '../../Features/SeriesRecommendations'
import SeriesCastAndCrews from '../SeriesCastAndCrews/SeriesCastAndCrews'



const SeriesDetail = () => {

/*fetching the movie information*/
const { id } = useParams();
const [seriesDetail, setSeriesDetail] = useState(null)


useEffect(() => {

    getSeriesDetails(id).then((response) => {
        console.log(response)
        setSeriesDetail(response.data);
         console.log(response.data)
    })
        .catch((erreur) => {
            alert("movie failed to detect RELOAD the page please !!!")
        });


}, [id])



if (!seriesDetail) {
    return <div className='loading mx-auto text-center absolute animate-bounce right-[630px] top-72 dark:text-white'><Spinner size='xl' color='black' /></div>;
}



  return (
    <>
    <div className='watchlist__btn w-fit flex flex-wrap  z-20 right-4 top-[80%] fixed animate-bounce  hover:animate-none  '>
        <Link to={'/Add_to_watchlist'} >
            <span className=' w-12 h-12 rounded-full flex justify-center hover:border-slate-400  transition-colors  hover:bg-white hover:font-black items-center shadow-xl dark:bg-white dark:border-slate-800 bg-black border-2 border-white'><FontAwesomeIcon className='text-white w-6 h-6 hover:text-slate-600 dark:text-slate-400 ' icon={faPlus} /></span>
        </Link>
    </div>

    <div className='movie_detail flex justify-center items-center w-full  rounded-xl mx-2'>
        <div className='movie_detail-poster  w-full h-auto dark:bg-slate-950  bg-white rounded-xl shadowbox '>
            <div className='movie_detail_poster relative '>
                <img className='w-full rounded-xl h-64 object-cover ' src={`https://image.tmdb.org/t/p/original/${seriesDetail.backdrop_path}`} alt='poster' />
            </div>
            <div className='relative top-72 '>
                <div className='movie_detail-imageMovie absolute  w-36 h-48 left-20   rounded-xl z-10 '>
                    <img className='rounded-xl absolute bottom-96 shadow-md ' src={`https://image.tmdb.org/t/p/original/${seriesDetail.poster_path}`} alt='film' />
                </div>

                <Tooltip disableTouchListener title={`trailer of the${seriesDetail.name}`}>
                    <div className='movie_detail-imageMovie absolute dark:bg-slate-950 bg-white w-16 h-16 right-20 bottom-80 flex justify-center items-center border rounded-full z-10'><FontAwesomeIcon className='dark:text-white' icon={faVideo}></FontAwesomeIcon></div>
                </Tooltip>
                <div className='movie_detail_card  absolute  w-full -top-[350px]  dark:bg-slate-800 bg-white rounded-3xl shadowbox'>
                    <div className='description w-full bg-transparent'>
                        <div className='name_date_country_stat grid lg:pl-72 lg:pt-8 md:pl-60 md:pt-8 sm:pt-44   mb-8 pt-8 w-full '>
                            <div className='grid w-full  justify-start '>

                                <span className='text-2xl  flex '>{seriesDetail.name}</span >
                                <span className='Film__Origin text-xs  mb-4 pl-4 text-slate-400-400'>Film Origin : {seriesDetail.production_countries[0].name} </span>



                            </div>
                            <div className='pb-4  w-full flex justify-center items-center'>
                                <hr className='w-full shadow-2xl border '/>
                            </div>

                            <div className='flex  w-full'>
                                <div className='flex flex-wrap w-full'>


                                    <div className='grid sm:mb-4 dark:text-slate-400  px-4'>
                                        <Tooltip disableTouchListener title={`${seriesDetail.vote_average} / 10`}>

                                            <span >Rating : {seriesDetail.vote_average} / 10 </span>
                                        </Tooltip>
                                        <Rating readOnly value={seriesDetail.vote_average / 2} precision={0.1} />

                                    </div>
                                    <div className='movie__spoken_language sm:mb-4 dark:text-slate-400 border-l px-4'>
                                        <span>language : </span>
                                        <span>{seriesDetail.spoken_languages[0].english_name}</span>
                                    </div>
                                    <div className='movie__stat sm:mb-4 dark:text-slate-400 border-l px-4'>
                                        <span>Status : </span>
                                        <span>{seriesDetail.status}</span>
                                    </div>
                                    <div className='movie__release_date sm:mb-4 dark:text-slate-400 border-l px-4'>
                                        <span>Release Date : </span>
                                        <span>{seriesDetail.first_air_date}</span>
                                    </div>

                                    <div className='movie__release_date sm:mb-4 dark:text-slate-400 border-l px-4'>
                                        <span>Genre : </span>
                                        <span>{seriesDetail.genres[0].name}</span>
                                    </div>



                                </div>


                            </div>


                        </div>

                        <div className='description w-full  px-8 pb-8  bg-transparent'>
                            <div className='mx-4'>
                                <div className='description__text mb-4'>
                                    <span className='text-xl border-b-2 dark:text-white '>Description : </span>
                                </div>
                                <div className='description border rounded-xl p-4 shadowbox '>
                                    <span className='dark:bg-slate-800' >{seriesDetail.overview}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='movie__artist__crew-slider'>
                         {/* <CastsAndCrew />  */}
                         <SeriesCastAndCrews/>

                    </div>

                    <div className='movie__detail-tags w-full'>
                        <div className='detail-txt grid mx-8 p-4'>
                            <span className='border-b-2 text-lg dark:text-white'>Details :</span>
                            <div className='w-full border grid mt-4 shadow-lg p-4   rounded-2xl'>
                                <div className='release_date w-fit border p-2 rounded-xl mb-4'>
                                    <span className='flex items-center dark:text-white'><FontAwesomeIcon className='mr-4 size-6 dark:text-slate-400' icon={faCalendarAlt} /> Release Date : <span className='text-gray-400 ml-2'>{seriesDetail.release_date}</span></span>
                                </div>
                                <div className='duration w-fit border p-2  rounded-xl mb-4'>
                                    <span className='flex items-center dark:text-white'><FontAwesomeIcon className='mr-4 size-6 dark:text-slate-400' icon={faClock} /> Duration : <span className='text-gray-400 ml-2'>{seriesDetail.runtime} min</span></span>
                                </div>
                                <div className='Status  w-fit border p-2 rounded-xl mb-4'>
                                    <span className='flex items-center dark:text-white'><FontAwesomeIcon className='mr-4 size-6 dark:text-slate-400' icon={faPersonCircleCheck} /> Rating : <span className='text-gray-400 ml-2'> 15+ - Teens 15 or older</span></span>
                                </div>
                                <div className='genres w-fit border p-2 rounded-xl  mb-4'>
                                    <span className='flex items-center dark:text-white'><FontAwesomeIcon className='mr-4 size-6 dark:text-slate-400' icon={faBlackboard} /> Genres : <span className='text-gray-400 ml-2'>{seriesDetail.genres[0].name}</span></span>
                                </div>
                                <div className='tags w-fit border p-2 rounded-xl  '>
                                    <span className='flex items-center dark:text-white'><FontAwesomeIcon className='mr-4 size-6 dark:text-slate-400' icon={faCalendarAlt} /> Tags : <span className='text-gray-400 ml-2'>" {seriesDetail.tagline} "</span></span>
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className='movie__recommendations'>

                       <SeriesRecommendations />


                    </div>



                </div>


            </div>
        </div>

    </div>
</>
  )
}

export default SeriesDetail