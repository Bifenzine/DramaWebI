import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import Rating from '@mui/material/Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'

const MovieDetail2 = () => {
    return (
        <div className='allmoviedetail w-full relative '>
            <div className='allposter relative w-full flex justify-center items-center'>
                <div className='movieposter   w-full border rounded-xl '>
                    <img className='w-full h-64 object-cover   ' src='../img/logo.png' alt='' />


                </div>
                <div className='pic_movie-movie_name-rate w-full absolute flex  justify-start top-36  z-10'>
                    <div className='movie__pic  w-36 h-44 ml-16   '>
                        <img className='object-cover w-full h-full  ' src='../img/logo.png' alt='' />

                    </div>
                    <div className='name_rate-movie  grid w-[950px] h-36 mt-20 pl-4  border ml-8'>
                        <div className='name__movie grid w-[800px] h-10  '>
                            <div className='name_and_trailer-movie w-full flex items-center justify-between '>
                                <div className='moviename_origin grid'>
                                    <span className='text-2xl'>Oscar Cardozo</span>
                                    <span className='text-xs ml-4'>origin country :</span>
                                </div>
                                <Tooltip disableTouchListener title={'trailer of the movie'}>
                                    <span className='text-2xl p-8 bg-white rounded-full w-12 h-12 border flex items-center justify-center'><FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon></span>
                                </Tooltip>
                            </div>


                        </div>

                        <div className='rate_release_date-movie items-center justify-start mt-4 flex gap-20'>
                            <div className='rate_movie border-l  pl-6 grid'>
                                <Tooltip disableTouchListener title={100 / 10}>
                                    <span className=''>Rating : <span className='border p-[2px] rounded-md bg-black text-white'>10000/10</span> </span>


                                </Tooltip>
                                <Rating readOnly value={30000 / 2} precision={0.1} />

                            </div>
                            <div className='language_movie border-l  pl-6'>
                                <span>Language : English </span>
                            </div>
                            <div className='relese_date-movie border-l pl-6'>
                                <span>Release Date : 2023 </span>
                            </div>
                            <div className='genre_movie border-l pl-6'>
                                <span>Genre : Horror </span>
                            </div>



                        </div>

                    </div>

                </div>


            </div>
            <div className='description_movie absolute grid bg-white w-full top-56 rounded-xl pt-40  px-8 border'>
                <div className='description grid w-full border p-4 rounded-lg mb-8 shadow-lg'>
                    <div className='description_title-movie mb-4 flex'>
                        <span className='text-xl'>Description :</span>
                    </div>
                    <div className='description_paragraphe flex'>
                        <p>LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                            LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                        </p>
                    </div>



                </div>
            </div>

        </div>

    )
}

export default MovieDetail2