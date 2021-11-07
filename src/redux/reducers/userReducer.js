export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'


const initialState = localStorage.getItem('currentUser') !== null ? {
    name: undefined,
    email: localStorage.getItem('currentUser').email,
    password: localStorage.getItem('currentUser').password,
    isLogged: true,
    isAdmin: false
} : {
    name: undefined,
    email: undefined,
    password: undefined,
    isLogged: false,
    isAdmin: false
}



export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogged: true,
                name: action.name,
                email: action.email,
                password: action.password,
                isAdmin: action.isAdmin
            }
        case LOG_OUT:
            console.log(action.type)
            return {
                ...state,
                name: undefined,
                email: undefined,
                password: undefined,
                isLogged: false,
                isAdmin: false
            }
        default:
            return state
    }
}