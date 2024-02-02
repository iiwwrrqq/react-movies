import React from 'react';
import s from "./Header.module.scss"
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/tmovie.png"
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={s.header}>
                    <div className={s.header__left}>
                       <NavLink className={s.left__link}><img src={logo} alt="logo" className={s.left__logo}/>tMovies</NavLink>
                    </div>
                    <div className={s.header__right}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink className={s.right__link}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.right__link}>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.right__link}>TV Series</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;