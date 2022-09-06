import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityColor = props.affair.priority === "high" ? s.high : props.affair.priority === "low" ? s.low : props.affair.priority === "middle" ? s.middle : '';

    return (
        <div className={s.affair}>
            <div className={s.affair__name}>{props.affair.name}</div>
            <div className={`${s.affair__priority} ${priorityColor}`}>{props.affair.priority}</div>
            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
