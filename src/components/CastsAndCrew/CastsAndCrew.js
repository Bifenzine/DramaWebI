import React, { useEffect, useState } from 'react'
import { getCastForEachMovie } from '../../data/FetchingDataAxios';
import { Link, useParams } from 'react-router-dom'
// import Swiper core and required modules
import Tooltip from '@mui/material/Tooltip'
import { Spinner } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode } from 'swiper/modules';


   




import './castandcrew.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const CastsAndCrew = () => {
    const { id } = useParams();
    // console.log(id)
    const [casts, setCasts] = useState(null)
    const [crews, setCrews] = useState([])

    useEffect(() => {
        getCastForEachMovie(id)
            .then((response) => {
                setCasts(response.data.cast);
                setCrews(response.data.crew);
            })
            .catch((error) => {
                console.error("Error fetching casts and crews:", error);
                alert("Failed to fetch casts and crews. Please reload the page.");
            });
    }, [id]);

    if (!casts) {
        return <div className='loading mx-auto text-center absolute animate-bounce right-[630px] top-72 dark:text-white'><Spinner size='xl' color='black' /></div>;
    }

    return (
        <>
            <div className='CastsAndCrews w-full '>
                <div className='casts__title grid mx-8 p-4  '>
                    <span className='border-b-2 text-lg dark:text-white'>Casts :</span>
                    <Swiper
                        slidesPerView={6.5}
                        spaceBetween={5}
                        freeMode={true}
                        modules={[FreeMode]}
                        centeredSlidesBounds
                        className='w-full border mt-4 shadow-lg dark:shadow-slate-800 rounded-2xl'
                    >
                        {casts.map((cast, index) => (
                            <SwiperSlide className='p-4' key={index}>
                                <Link className='bg-transparent rounded-lg shadowbox cursor-grab' to={`Artist_Page/${cast.id}`}>
                                    <div className="relative flex w-40 h-52 border flex-col justify-center items-center bg-transparent text-slate-500 dark:text-slate-400 shadow-gray-300 dark:shadow-slate-800 shadow-lg rounded-lg">
                                        <Tooltip disableTouchListener title={cast.name}>
                                            <img className='movieList__card-pic absolute h-28 shadowbox w-28 object-cover top-6 border-2 border-slate-300 rounded-full' src={cast.profile_path ? `https://image.tmdb.org/t/p/original/${cast.profile_path}` : '../img/logo.png'} alt='cast' />
                                        </Tooltip>
                                        <div className='movieList__card-name_release_date rounded-md grid p-1 bottom-0 border-t-2 absolute items-center bg-white dark:bg-slate-800 h-16'>
                                            <Tooltip disableTouchListener title={cast.name}>
                                                <span className='movieList__span-name flex justify-start truncate text-slate-600'>{cast.original_name}</span>
                                            </Tooltip>
                                            <span className='movieList__span-release-date flex truncate text-sm justify-center text-gray-400'>{cast.character}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='crews__title grid mx-8 p-4  '>
                    <span className='border-b-2 text-lg dark:text-white'>Crews :</span>
                    <Swiper
                        slidesPerView={6.5}
                        spaceBetween={5}
                        freeMode={true}
                        modules={[FreeMode]}
                        centeredSlidesBounds
                        className='w-full border mt-4 shadow-lg dark:shadow-slate-800 rounded-2xl'
                    >
                        {crews.map((crew, index) => (
                            <SwiperSlide className='p-4 dark:bg-slate-800 bg-white' key={index}>
                                <Link className='bg-transparent rounded-lg shadowbox cursor-grab' to={`/Crew_Page/${crew.id}`}>
                                    <div className="relative flex w-40 h-52 border flex-col justify-center items-center bg-transparent text-slate-500 dark:text-slate-400 shadow-gray-300 dark:shadow-slate-800 shadow-lg rounded-lg">
                                        <Tooltip disableTouchListener title={crew.name}>
                                            <img className='movieList__card-pic absolute h-28 shadowbox w-28 object-cover top-6 border-2 border-slate-300 rounded-full' src={crew.profile_path ? `https://image.tmdb.org/t/p/original/${crew.profile_path}` : '../img/logo.png'} alt={`image of ${crew.name}`} />
                                        </Tooltip>
                                        <div className='movieList__card-name_release_date rounded-md grid p-1 bottom-0 border-t-2 absolute items-center bg-white dark:bg-slate-800 h-16'>
                                            <Tooltip disableTouchListener title={crew.name}>
                                                <span className='movieList__span-name flex justify-center truncate text-gray-600 dark:text-slate-500'>{crew.original_name}</span>
                                            </Tooltip>
                                            <span className='movieList__span-release-date flex truncate text-sm justify-center text-slate-400'>{crew.job}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CastsAndCrew;