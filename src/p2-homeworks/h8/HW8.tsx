import React, {useState} from 'react'
import {homeWorkCheckReducerAC, homeWorkReducer, homeWorkSortReducerAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'


export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div className={s.users} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, homeWorkSortReducerAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, homeWorkSortReducerAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, homeWorkCheckReducerAC(18)))

    return (
        <div>
            <hr/>
            <div className={s.wrapper}>
                <div className={s.title}>homeworks 8</div>

                {/*should work (должно работать)*/}
                {finalPeople}
                <div className={s.buttonWrapper}>
                    <SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton>
                    <SuperButton className={s.button} onClick={sortDown}>sort down</SuperButton>
                    <SuperButton className={s.button} onClick={checkAge}>check 18</SuperButton>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
