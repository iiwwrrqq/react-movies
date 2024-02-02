import React, { useEffect } from 'react';
import s from "./DramaMovies.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { GET_DRAMA_MOVIES_ASYNC } from '../../redux/actions/actions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SELECT_MOVIE } from '../../redux/slicers/moviesFetchSlice';
import { useNavigate } from 'react-router-dom';

const DramaMovies = () => {
  const naviagate = useNavigate()

    const dispatch = useDispatch()
    const { dramaMoviesData } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(GET_DRAMA_MOVIES_ASYNC())
    }, [])

    const handleNavigate = (movieId) => {
      const selectedMovie = dramaMoviesData.find((movie) => movie.id === movieId);
  
      dispatch(SELECT_MOVIE(selectedMovie));
      naviagate(`/details/${movieId}`);
    };
    return (
        <div className='container__wrap'>
        <h2 className={s.global__title}>Драма</h2>
        <Swiper spaceBetween={3} slidesPerView={5}>
        {dramaMoviesData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className={s.card} onClick={() => handleNavigate(movie.id)}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="img"
                    className={s.poster__img}
                />
              <p className={`${s.movie__title} ${s.hover__text}`}>{movie.title}</p>
              <p className={s.movie__average}>
                <div className={s.average_bg}></div>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default DramaMovies;