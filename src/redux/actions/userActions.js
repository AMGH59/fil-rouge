import { LOG_IN, LOG_OUT } from '../reducers/userReducer'
import { idVerifier } from '../../services/user';

export function logIn(user) {

    return dispatch =>{
        idVerifier(user).length===1 ?
            dispatch({
            type: LOG_IN,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: false
        }) : alert("Email ou mot de passe incorect")
    }
}     

export function logOut(){
    return dispatch => {
        dispatch({
            type:LOG_OUT
        })
    }
}