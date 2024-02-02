import React, { useEffect } from 'react';
import s from './MainList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import MainListTrendingMovies from './MainListTrendingMovies/MainListTrendingMovies';
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIES_ASYNC } from '../../redux/actions/actions';
import { SELECT_MOVIE } from '../../redux/slicers/moviesFetchSlice';
import { useNavigate } from 'react-router-dom';

const MainList = () => {
  const naviagate = useNavigate()

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(GET_MOVIES_ASYNC());
  }, [dispatch]);

  const handleNavigate = (movieId) => {
    const selectedMovie = data.find((movie) => movie.id === movieId);

    dispatch(SELECT_MOVIE(selectedMovie));
    naviagate(`/details/${movieId}`);
  };

  return (
    <div className={s.wrap}>
      <MainListTrendingMovies s={s} />
      <Swiper spaceBetween={3} slidesPerView={2.1}>
        {data.map((movie) => (
           <SwiperSlide key={movie.id}>  
             <div className={s.card} onClick={() => handleNavigate(movie.id)}>
               <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="img" className={s.poster__img} />
                <p className={s.movie__title}>{movie.title}</p>
                <p className={s.movie__average}><div className={s.average_bg}></div></p>
              </div>
            </SwiperSlide>
         ))}
       </Swiper>
    </div>
  );
};

export default MainList;
