import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getSeriesRecommendations } from '../data/FetchingDataAxios';
// import Swiper core and required modules
import Tooltip from '@mui/material/Tooltip'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode } from 'swiper/modules';
import { Spinner } from '@chakra-ui/react'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SeriesRecommendations = () => {

    /*fetching the movie information*/

    const { id } = useParams();

    const [serieRecommendations, setSerieRecommendations] = useState(null)


    useEffect(() => {

        getSeriesRecommendations(id).then((response) => {
            console.log(response)
            setSerieRecommendations(response.data.results);
            console.log(response.data.results)
        })
            .catch((erreur) => {
                alert("movie failed to detect RELOAD the page please !!!")
            });


    }, [id])

    console.log(id)
    console.log(serieRecommendations)



    if (!serieRecommendations) {
        return <div className='loading mx-auto text-center dark:text-white'><Spinner size='xl' color='black' /></div>;
    }
    return (
        <div className='casts__title grid mx-8 p-4  '>
            <span className='border-b-2 text-lg'>Recommendations : </span>

            <Swiper
                // install Swiper modules

                slidesPerView={7}
                spaceBetween={15}
                freeMode={true}

                modules={[FreeMode]}
                centeredSlidesBounds





                className='w-full border mt-4 shadow-lg dark:shadow-slate-800 rounded-2xl  '

            >
                {serieRecommendations.map(serieRecommendation => (


                    <SwiperSlide className='p-4 dark:bg-slate-800 bg-white  ' >

                        <Link className=' bg-transparent  rounded-lg  ' key={serieRecommendation.id} to={`/Serie_Detail/${serieRecommendation.id}`} >
                            <div className="relative flex w-32 h-52 flex-col bg-transparent bg-clip-border text-gray-700 shadow-gray-300 shadow-lg rounded-lg">
                                <div className='movieList__card-rating flex items-center gap-1 p-1 justify-end text-white border-1 right-0 top-0 absolute w-fit z-10 rounded-bl-2xl bg-gradient-to-t from-black to-transparent '><span><FontAwesomeIcon icon={faStar} color='yellow' /> {serieRecommendation.vote_average.toFixed(1)}</span></div>
                                <img className='movieList__card-pic absolute h-full hover:opacity-80 w-full object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/original/${serieRecommendation.poster_path}`} alt={serieRecommendation.original_title} />
                                <div className='movieList__card-name_release_date text-white rounded-md grid  p-1 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-black to-transparent h-16 '>
                                    <Tooltip disableTouchListener title={serieRecommendation.name}>
                                        <span className='movieList__span-name truncate'>{serieRecommendation.name}</span>
                                    </Tooltip>
                                    <div className='flex  items-center justify-between px-2'>

                                        <span className='flex '>{serieRecommendation.media_type}</span>
                                        <span className='movieList__span-release-date flex'>{serieRecommendation.release_date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </SwiperSlide>
                ))}



            </Swiper>

        </div>
    )
}

export default SeriesRecommendations