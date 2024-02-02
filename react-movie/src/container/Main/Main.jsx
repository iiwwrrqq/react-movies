import React, { useState, useEffect } from 'react';
import s from "./Main.module.scss";
import MainList from '../../components/MainList/MainList';
import NewMovies from '../../components/NewMovies/NewMovies';
import MovieFamily from '../../components/MovieFamily/MovieFamily';
import DramaMovies from '../../components/DramaMovies/DramaMovies';


const Main = () => {

    return (
        <div>
           <MainList />
           <NewMovies />
           <MovieFamily />
           <DramaMovies />
        </div>
    );
};

export default Main;
