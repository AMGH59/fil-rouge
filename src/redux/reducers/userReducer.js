export const LOG_IN='LOG_IN'
export const LOG_OUT='LOG_OUT'


const initialState = {
    name:undefined,
    email:undefined,
    password:undefined,
    isLogged:false,
    isAdmin:false
}



export default function userReducer(state=initialState,action){
    switch(action.type){
        case LOG_IN:
            return {...state, isLogged:true, name:action.name, email:action.email,password:action.password,isAdmin:action.isAdmin}
        case LOG_OUT:
            return initialState
        default:
            return state
    }
}