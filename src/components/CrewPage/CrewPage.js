import { faAnchor, faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@mui/material/Tooltip'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetailPerson } from '../../data/FetchingDataAxios'

const CrewPage = () => {

    const { id } = useParams();
    // console.log(id)

    const [person, setPersons] = useState(null)



    useEffect(() => {
        getDetailPerson(id)
            .then((response) => {
                setPersons(response.data);
            })
            .catch((error) => {
                console.error("Error fetching artist details:", error);
            });
    }, [id]);

// console.log(id)
// console.log(person.id)


    if (!person) {
        return <div className='loading mx-auto text-center absolute right-[630px] animate-bounce top-72 dark:text-white'>Loading...</div>;
    }

    return (
        <>


            <div className='movie_detail flex justify-center items-center w-full  rounded-xl mx-2'>
                <div className='movie_detail-poster  w-full h-auto dark:bg-slate-950   bg-white rounded-xl shadow-2xl  '>
                    <div className='movie_detail_poster relative '>
                        <img className='w-full rounded-xl h-64 object-cover dark:border dark:border-slate-800 ' src='../img/logo.png' alt='poster' />
                    </div>
                    <div className='relative top-72 border  dark:border-slate-500 '>
                        <div className='movie_detail-imageMovie absolute  w-48 h-48 right-[465px] -bottom-[80px]  z-10 '>
                            <Tooltip disableTouchListener title={person.name}>
                                <img className=' absolute bottom-96 bg-white w-48 h-48 object-cover dark:bg-slate-950 dark:border-slate-800 shadow-md rounded-full border-2 border-slate-400 ' src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} alt='film' />
                            </Tooltip>
                        </div>

                        <div className='movie_detail_card  absolute  w-full -top-[390px] dark:bg-slate-950 dark:border-slate-800  bg-white rounded-3xl shadow-2xl'>
                            <div className='description w-full bg-transparent border dark:border-slate-600 dark:rounded-3xl '>
                                <div className='name_date_country_stat grid  mb-8 pt-24 w-full '>
                                    <div className='flex w-full  justify-center '>
                                        <div className='grid w-full justify-center items-center'>
                                            <span className='text-3xl w-fit p-2 border border-slate-300 rounded-3xl px-4 flex justify-center items-center dark:text-white '>{person.name}</span >
                                            <span className='flex justify-center items-center mt-4 py-4 border-t border-b '>Popularity :{person.popularity}</span>
                                        </div>

                                    </div>
                                    <div className='pb-4 pt-4  w-full flex justify-center items-center'>
                                        <hr className='w-full shadow-2xl border  ' />
                                    </div>

                                    <div className='flex  w-full ml-12  '>
                                        <div className='grid flex-wrap w-full'>
                                            <div className='movie__spoken_language pl-8 border-l-2 mb-2 py-2'>
                                                <span className='dark:text-slate-400'>language : </span>
                                                <span className='dark:text-slate-400'>ok</span>
                                            </div>
                                            <div className='movie__stat pl-8 border-l-2 mb-2 py-2'>
                                                <span className='dark:text-slate-400'>Status : </span>
                                                <span className='dark:text-slate-400'>status</span>
                                            </div>
                                            <div className='movie__release_date pl-8 border-l-2 mb-2 py-2'>
                                                <span className='dark:text-slate-400'>birthday : </span>
                                                <span className='dark:text-slate-400'>{person.birthday}</span>
                                            </div>

                                            <div className='movie__release_date pl-8 border-l-2 mb-2 py-2'>
                                                <span className='dark:text-slate-400'>Place of birth : </span>
                                                <span className='dark:text-slate-400'>{person.place_of_birth}</span>
                                            </div>



                                        </div>


                                    </div>


                                </div>

                                <div className='description w-full  px-8 pb-8 r bg-transparent'>
                                    <div className='mx-4 w-full'>
                                        <div className='description__text mb-4 border-b-2 w-full'>
                                            <span className='text-xl  w-full dark:text-white '>Biography : </span>
                                        </div>
                                        <div className='description border rounded-xl p-4 shadow-2xl dark:bg-slate-700 '>
                                             <span className='dark:text-slate-400'>{person.biography? person.biography : "No biography at the moment ... "}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                             <div className='movie__detail-tags w-full'>
                                <div className='detail-txt grid mx-8 p-4'>
                                    <span className='border-b-2 text-lg'>Details :</span>
                                    <div className='w-full border grid mt-4 shadow-lg p-4   rounded-2xl'>
                                        


                                    </div>

                                </div>

                            </div> 





                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default CrewPage