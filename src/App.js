import React, { useEffect, useState } from 'react';
import { MoviesList, MovieDetail, Navbar, SeriesDetail } from './components';
import './App.css'
import CssBaseLine from '@mui/material/CssBaseline';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import { searchValueContext } from './components/useContextVariable/searchValueContext';
// import { DarkModeContext, useDarkMode, DarkModeProvider } from './components/useContextVariable/DarkModeContext';
import ArtistPage from './components/ArtistPage/ArtistPage';
import AddWatchList from './Features/AddWatchList';
import { HomePage, SliderCategoriesPage } from './Pages';
import CrewPage from './components/CrewPage/CrewPage';




const App = () => {


  const [searchValue, setSearchValue] = useState("")


  return (
    <>
      <div className='app' >
        {/* <CssBaseLine /> */}
        <searchValueContext.Provider value={{ searchValue, setSearchValue }} >
          <Navbar />
          <main>
            <SearchBar />
            <Router>
              <Routes> { /*a <Switch> looks through its children <Route>s and renders the first one that matches the current URL*/}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/Movie_Detail/:id" element={<MovieDetail />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Artist_Page/:id" element={<ArtistPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Crew_page/:id" element={<ArtistPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Add_to_watchlist/:id" element={<AddWatchList />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Serie_Detail/:id" element={<SeriesDetail />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Series" element={<SliderCategoriesPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Movie_Detail/:id/Artist_Page/:id" element={<ArtistPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Crew_Page/:id" element={<CrewPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Movie_Detail/:id/Crew_Page/:id" element={<CrewPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Serie_Detail/:id/Crew_Page/:id" element={<CrewPage />} /> { /*notice: /:id <=> /<number>*/}
                <Route exact path="/Serie_Detail/:id/Artist_Page/:id" element={<ArtistPage />} /> { /*notice: /:id <=> /<number>*/}




              </Routes>

            </Router>
          </main>
        </searchValueContext.Provider>

      </div>
    </>

  )
}


export default App;


