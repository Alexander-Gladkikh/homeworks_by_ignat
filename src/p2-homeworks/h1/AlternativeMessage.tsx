import React from 'react'
import s from './Message.module.css'

type AlternativeMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}></img>
            <div className={s.message__block}>
                <div className={s.title}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <span className={s.time}>{props.time}</span>
            </div>

        </div>
    )
}

export default AlternativeMessage
