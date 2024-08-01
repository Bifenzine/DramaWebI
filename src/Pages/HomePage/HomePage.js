import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import {
  MoviesList,
  OnAirSeries,
  PopularSeries,
  TrendingSeries,
} from "../../components";
import { AiringSeries } from "../../components";
import PopularMovies from "../Movies/PopularMovies/PopularMovies";
import TopRatedMovies from "../Movies/TrendingMovies/TopRatedMovies";
import UpcomingMovies from "../Movies/UpcomingMovies/UpcomingMovies";
import Trending from "../trending/Trending";


const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <Tabs
          className="flex justify-center items-center w-full "
          position="relative"
          variant="soft-rounded"
          colorScheme="gray"
        >
          <TabList className="gap-4 border-2 border-slate-300 rounded-3xl w-fit flex justify-center items-center">
            <Tab>Series</Tab>
            <Tab>Movies</Tab>
            <Tab>Trending</Tab>
          </TabList>
          <TabIndicator className="bg-black" />
          <TabPanels className="w-full">
            <TabPanel>
              <AiringSeries />
              <TrendingSeries />
              <OnAirSeries />
              <PopularSeries />
            </TabPanel>
            <TabPanel>
              <TopRatedMovies/>
              <PopularMovies/>
              <UpcomingMovies/>
              <MoviesList />
            </TabPanel>
            <TabPanel>
              <TrendingSeries />
              <PopularMovies/>
              <Trending />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default HomePage;
