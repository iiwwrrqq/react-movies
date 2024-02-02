import React, {useEffect} from 'react';
import s from "./MovieFamily.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { GET_FAMILY_MOVIES_ASYNC } from '../../redux/actions/actions';
import { SELECT_MOVIE } from '../../redux/slicers/moviesFetchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const MovieFamily = () => {

    const naviagate = useNavigate()

    const dispatch = useDispatch()
    const {movieFamilyData} = useSelector((state) => state.movies)

    useEffect(()=>{
        dispatch(GET_FAMILY_MOVIES_ASYNC())
    },[dispatch])

    const handleNavigate = (movieId) => {
      const selectedMovie = movieFamilyData.find((movie) => movie.id === movieId);
  
      dispatch(SELECT_MOVIE(selectedMovie));
      naviagate(`/details/${movieId}`);
    };
    return (
        <div className="container__wrap">
         <h2 className={s.global__title}>Смотрим всей семьей</h2>
         <Swiper spaceBetween={3} slidesPerView={5}>
        {movieFamilyData.map((movie) => (
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

export default MovieFamily;