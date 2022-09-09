import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './HW5.module.css';


function Header() {
    return (
        <div className={s.header}>
            <div className={s.header__link}>
                <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.navLink}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.navLink}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.navLink}>juniorPlus</NavLink>
            </div>
            <div className={s.block}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1DFF13"
                 className={s.block__svg} viewBox="0 0 16 16">
                <path
                    d="M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
                <path
                    d="M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
            </svg>

        </div>
    )
}

export default Header
