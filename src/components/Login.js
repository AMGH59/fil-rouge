import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/userActions';
import { logOut } from '../redux/actions/userActions';
import { deleteCurrentUser } from '../services/user';

export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    handleClick=()=>{
        deleteCurrentUser()
        this.props.currentUserLogOut()
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    handleSubmition = () => {
        this.props.checkId(this.state)
    }

    render() {
        return (<>
            {!this.props.isLogged ?
                <div className="container bg-light p-5 rounded">
                    <h3> Déjà un compte ?</h3>
                    <hr />
                    <form className="form d-flex flex-column">
                        <label htmlFor="email">e-mail</label><input type="email" name="email" id="" onChange={e => this.handleEmail(e)} onKeyDown={(e) => e.key === 'Enter' ? this.handleSubmition() : null} />
                        <label htmlFor="password-once">Mot de passe</label><input type="password" name="password-once" id="" onChange={e => this.handlePassword(e)} onKeyDown={(e) => e.key === 'Enter' ? this.handleSubmition() : null} />
                        <button type="button" className="btn btn-dark mt-2" onClick={() => this.handleSubmition()}>Se connecter</button>
                    </form>
                </div>
                :
                <div className="container bg-light p-5 rounded">

                    <h4>Vous n'êtes pas {this.props.name} ?</h4>
                    <button className='btn btn-dark' onClick={() => this.handleClick()}>se déconnecter</button>
                </div>
            }
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged,
        name: state.user.name
    }
}


const mapActionToProps = (dispatch) => {
    return {
        checkId: user => dispatch(logIn(user)),
        currentUserLogOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapActionToProps)(Login)