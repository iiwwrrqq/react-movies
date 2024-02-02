import React from 'react';
import { useSelector } from 'react-redux';
import s from './Details.module.scss';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const naviagate = useNavigate()

  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  console.log(selectedMovie);
  return (
 <div>
    <button className={s.back__button} onClick={() => naviagate("/")}>назад</button>
    <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt="" className={s.backdrop_path}/>
    <div className='details__container'>
     <div className={s.details}>
     <div className={s.details__left}>
        <h2 className={s.details__overview}>{selectedMovie.overview}</h2>
        <div className={s.button__details}>
            <button className={s.details__button}>Смотреть фильм</button>
            <button className={s.details__btn}>Трейлер</button>
        </div>
      </div>
     </div>
    </div>
 </div>
  );
};

export default Details;
