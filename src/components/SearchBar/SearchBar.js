import React, { useContext, useState } from 'react'
import './searchBar.css'
import { searchValueContext } from '../useContextVariable/searchValueContext'
import DarkMode from '../../Features/darkmode/DarkMode'

const SearchBar = () => {

    // const { isDarkMode, setIsDarkMode } = useState(DarkModeContext);


    const { searchValue, setSearchValue } = useContext(searchValueContext)

    const searchfunction = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <>

            <DarkMode />
            <div className="flex  items-center justify-center p-5 w-full" >
                <div className="w-96 rounded-lg bg-transparent border dark:border-slate-800 border-gray-400">
                    <div className="flex">
                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 dark:border-slate-800 dark:bg-slate-600 bg-white p-5">
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 dark:fill-slate-300 fill-gray-500 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                            </svg>
                        </div>
                        <input type="text" className="w-full max-w-[320px] dark:bg-slate-600 dark:text-white bg-white pl-2 text-base font-semibold outline-0" placeholder="search for your movie !!!" id="" onChange={searchfunction} />
                        <input type="button" value="Search" className="bg-gray-700 p-2 rounded-tr-lg rounded-br-lg  text-slate-300 font-semibold hover:bg-white dark:hover:bg-slate-900  hover:text-black dark:hover:text-slate-300 border-l dark:border-l-slate-800 transition-colors" />

                    </div>
                </div>
            </div>

        </>

    )

}

export default SearchBar