import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/userActions';

export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }


    handleEmail = ( e ) => {
        this.setState({email:e.target.value})
    }
    handlePassword = ( e ) => {
        this.setState({password:e.target.value})
    }
    handleSubmition = () => {
        this.props.checkId(this.state)
    }


    render() {
        return (
            <div className="container bg-light p-5 rounded">
            <h3> Déjà un compte ?</h3>
            <hr />
            <form className="form d-flex flex-column">
                <label htmlFor="email">e-mail</label><input type="email" name="email" id="" onChange={e=>this.handleEmail(e)} onKeyDown={(e)=> e.key==='Enter' ? this.handleSubmition() : null} />
                <label htmlFor="password-once">Mot de passe</label><input type="password" name="password-once" id="" onChange={e=>this.handlePassword(e)}  onKeyDown={(e)=> e.key==='Enter' ? this.handleSubmition() : null}/>
                <button type="button" className="btn btn-dark mt-2" onClick={()=>this.handleSubmition()}>Se connecter</button>
            </form>
            </div>
            )
    }
}

const MapStateToProps = (state) => {
    return{
        isLogged:state.user.isLogged
    }
}


const MapActionToProps = (dispatch) => {
    return{
        checkId : user => dispatch(logIn(user))
    }
}

export default connect(MapStateToProps,MapActionToProps)(Login)