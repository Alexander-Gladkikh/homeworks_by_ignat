import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Александр',
        message: 'Тут могла быть ваша реклама!!!!',
        time: '22:00',
    },

    {
        avatar: 'https://mixmag.io/wp-content/uploads/2021/05/anime-avatarka-1200x675-cropped.jpg',
        name: 'Евген',
        message: 'Согласен Брооо!!',
        time: '23:00',
    }
]


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message avatar={messageData[0].avatar}
                     name={messageData[0].name}
                     message={messageData[0].message}
                     time={messageData[0].time}/>

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage avatar={messageData[1].avatar}
                                name={messageData[1].name}
                                message={messageData[1].message}
                                time={messageData[1].time}/>
            <hr/>
        </div>
    )
}

export default HW1
