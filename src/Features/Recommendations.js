import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getMovieRecommendations } from '../data/FetchingDataAxios';
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

const Recommendations = () => {
    /*fetching the movie information*/
    const { id } = useParams();

    const [recommendations, setRecommendations] = useState(null)


    useEffect(() => {

        getMovieRecommendations(id).then((response) => {
            // console.log(response)
            setRecommendations(response.data.results);
            // console.log(response.data.results)
        })
            .catch((erreur) => {
                alert("movie failed to detect RELOAD the page please !!!")
            });


    }, [id])



    if (!recommendations) {
        return <div className='loading mx-auto text-center dark:text-white'><Spinner size='xl' color='black' /></div>;
    }
    return (
        <div className='casts__title grid  p-4  '>
            <span className='border-b-2 text-lg'>Recommendations : </span>

            <Swiper
                // install Swiper modules

                slidesPerView={6.5}
                spaceBetween={5}
                freeMode={true}

                modules={[FreeMode]}
                centeredSlidesBounds
                className='w-full  border mt-4 shadow-lg dark:shadow-slate-800 rounded-2xl  '

            >
                {recommendations.map((recommendation, index) => (


                    <SwiperSlide className=' dark:bg-slate-800 bg-white'key={index} >

                        <Link className=' bg-transparent  rounded-lg  '  to={`/Movie_Detail/${recommendation.id}`} >
                            <div className="relative flex w-40 h-64 flex-col bg-transparent bg-clip-border text-gray-700 shadow-gray-300 shadow-lg rounded-lg">
                                <div className='movieList__card-rating flex items-center gap-1 p-1 justify-end text-white border-1 right-0 top-0 absolute w-fit z-10 rounded-bl-2xl bg-gradient-to-t from-black to-transparent '><span><FontAwesomeIcon icon={faStar} color='yellow' /> {recommendation.vote_average}</span></div>
                                <img className='movieList__card-pic absolute h-full hover:opacity-80 w-full object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/original/${recommendation.poster_path}`} alt={recommendation.original_title} />
                                <div className='movieList__card-name_release_date text-white rounded-md grid  p-1 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-black to-transparent h-16 '>
                                    <Tooltip disableTouchListener title={recommendation.title}>
                                        <span className='movieList__span-name truncate'>{recommendation.title}</span>
                                    </Tooltip>
                                    <div className='flex  items-center justify-between px-2'>

                                        <span className='flex '>{recommendation.media_type}</span>
                                        <span className='movieList__span-release-date flex'>{recommendation.release_date.substring(0, 4)}</span>
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

export default Recommendations