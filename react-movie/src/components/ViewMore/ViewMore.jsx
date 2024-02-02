import React, {useEffect} from 'react';
import { GET_MOVIES_ASYNC } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import s from "./ViewMore.module.scss"
import { useNavigate } from 'react-router-dom';
const ViewMore = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data } = useSelector((state) => state.movies);

    useEffect(() => {
      dispatch(GET_MOVIES_ASYNC());
    }, [dispatch]);
  
    return (
        <div className='container'>
            <div className={s.view__card}>
              <button className={s.view__button} onClick={() => navigate("/")}>назад</button>
            <div className={s.card__wrap}>
            {data.map((movie) => (
             <div className={s.card}>
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
             ))}
            </div>
        </div>
        </div>
    );
};

export default ViewMore;