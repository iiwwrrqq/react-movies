import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const MainListTrendingMovies = ({s}) => {
   const naviagate = useNavigate()
    return (
       <div className='container'>
         <div className={s.wrap__view}>
            <Button onClick={() => naviagate("/view-more")}>показать больше</Button>
         </div>
       </div>
    );
};

export default MainListTrendingMovies;