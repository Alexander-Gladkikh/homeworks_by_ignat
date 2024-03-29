import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

             const result = [...state].sort((a:UserType, b:UserType) => {
                    if (a.name < b.name) return -1
                    else if (a.name > b.name) return 1
                    else return 0
                })

            return action.payload === 'up' ? result : result.reverse()


            return state // need to fix
        }
        case 'check': {


            return state.filter(el => el.age > action.payload) // need to fix
        }
        default:
            return state
    }
}


