import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {


    return (
        <div className={s.container}>
            <div className={s.input__container}>
                <SuperInputText value={name}
                                onChange={setNameCallback}
                                onKeyDown={onEnter}
                                error={error}/>
            </div>
            <SuperButton className={s.button} onClick={addUser} disabled={!name}>add</SuperButton>
            <span className={s.span}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
