import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: tsarType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const result = [...state].sort((a: UserType, b:UserType) => {
                if (a.name < b.name) return -1
                else if (a.name > b.name) return 1
                else return 0
            })
            return action.payload === 'up' ? result : result.reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload);
        }
        default:
            return state
    }
}

type tsarType = homeWorkSortReducerACType | homeWorkCheckReducerACType;

type homeWorkSortReducerACType = ReturnType<typeof homeWorkSortReducerAC>

export const homeWorkSortReducerAC = (title: string) => {
    return {
        type: 'sort',
        payload: title,
    } as const
}

type homeWorkCheckReducerACType = ReturnType<typeof homeWorkCheckReducerAC>

export const homeWorkCheckReducerAC = (age: number) => {
    return {
        type: 'check',
        payload: age,
    } as const
}

