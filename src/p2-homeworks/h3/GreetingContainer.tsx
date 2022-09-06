import React, {ChangeEvent,  KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = event.currentTarget.value.trim() // need to fix

        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            setError('name is require')
            name && setName('')
        }
    }

    const addUser = () => {
        alert(`Hello ${name} !`) // need to fix
        addUserCallback(name)
        setName('')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && name ? addUser() : setError('Please enter any name')
    }

    let totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
