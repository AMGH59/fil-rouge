import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/userActions';

export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:""
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
        this.setState({
            isLogged:this.props.isLogged
        })
    }

    render() {
        return (
            <div className="container bg-light p-5 rounded">
            <h3> Déjà un compte ?</h3>
            <hr />
            <form className="form d-flex flex-column">
                <label htmlFor="email">e-mail</label><input type="email" name="email" id="" onChange={e=>this.handleEmail(e)} />
                <label htmlFor="password-once">Mot de passe</label><input type="text" name="password-once" id="" onChange={e=>this.handlePassword(e)} />
                <button type="button" className="btn btn-dark mt-2" onClick={()=>this.handleSubmition()}>Se connecter</button>
            </form>
            </div>
            )
    }
}


const MapActionToProps = (dispatch) => {
    return{
        checkId : user => dispatch(logIn(user))
    }
}

export default connect(null,MapActionToProps)(Login)