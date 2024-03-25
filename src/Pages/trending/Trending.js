import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  {getPopularPeople}  from '../../data/FetchingDataAxios';

const Trending = () => {
    // const { searchValue, setSearchValue } = useContext(searchValueContext)
    const [popularPeople, setPopularPeople] = useState([]);
    //const [dataSeriesList, setDataSeriesList] = useState([]);

    //const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        getPopularPeople().then((response) => {
            // console.log(response)
            setPopularPeople    (response.data.results);
             console.log(response.data.results)
            

        })

            .catch((erreur) => {
                alert("erreur fetching Data")
                console.log(erreur)


            })
    }, [])

    if (!popularPeople) {
        return <div className='loading mx-auto animate-bounce text-center absolute right-[630px] top-72 dark:text-white'>
            <Spinner size='xl' color='black' />
        </div>;
    }

    return (

<div className='casts__title grid  p-4  '>
            <div className='flex justify-between items-center border-b-2'>

<span className=' text-lg'>Popular Artists :  </span>
<Link className='' to={'./'}>See More <FontAwesomeIcon icon={faArrowRight} /></Link>
    </div>
            <Swiper
                // install Swiper modules

                slidesPerView={7}
                spaceBetween={3}
                freeMode={true}

                modules={[FreeMode]}
                centeredSlidesBounds

                className='w-full border mt-4 shadow-lg dark:shadow-slate-800   '

            >
                {popularPeople.map((popularPPL, index) => (

                    <SwiperSlide className='p-4 dark:bg-slate-800 bg-white 'key={index}  >

                        <Link className=' bg-transparent  rounded-lg ' to={`/Artist_Page/${popularPPL.id}`} >
                            <div className="relative flex w-32 h-52 flex-col bg-transparent bg-clip-border text-gray-700 shadow-gray-300 shadow-lg rounded-lg">
                                <div className='movieList__card-rating flex items-center gap-1 p-1 justify-end text-white border-1 right-0 top-0 absolute w-fit z-10 rounded-bl-2xl bg-gradient-to-t from-black to-transparent '><span><FontAwesomeIcon icon={faStar} color='yellow' /> {index + 1}</span></div>
                                <img className='movieList__card-pic absolute h-full hover:opacity-80 w-full object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/original/${popularPPL.profile_path}`} alt={popularPPL.original_name} />
                                <div className='movieList__card-name_release_date text-white rounded-md grid  p-1 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-black to-transparent h-12 '>
                                    <Tooltip disableTouchListener title={popularPPL.name}>
                                        <span className='movieList__span-name text-sm truncate'>{popularPPL.name}</span>
                                    </Tooltip>  
                                    <div className='flex  items-center justify-between px-2'>

                                        <span className='movieList__span-release-date flex'>{popularPPL.first_air_date}</span>
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

export default Trending