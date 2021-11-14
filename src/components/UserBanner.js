import devtalkslogo from '../assets/img/devtalks-logo.PNG'
import { Link } from "react-router-dom"
import userPic from '../assets/img/user-pic.jpg'
import { deleteCurrentUser } from '../services/user'
import { logOut } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import { PureComponent } from 'react';

class UserBanner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
        deleteCurrentUser()
        this.props.logOut()
    }

    render() {
        return (
            <nav class="navbar navbar-light shadow-sm bg-light px-5">
                <Link to="/">
                    <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
                </Link>

                <div>
                    <ul className='menu'>
                        <img src={userPic} alt="user-logo " className='user-logo logo-hover border shadow-sm p-1' />
                        <li className='scrolling-menu'>
                            <ul className='shadow menu-content bg-light p-4 border'>
                                <Link to="/user" style={{ textDecoration: 'none' }} >
                                    <li className='dropdown-item'>Votre Profil</li>
                                </Link>
                                <hr />
                                <li >Vous n'êtes pas <b>{this.props.name}</b> ?</li>
                                <li className='small'><Link to="/singin" onClick={() => this.handleClick()} >changer d'utilsateur</Link>
                                </li>
                                <li className='small'>ou <Link to='/' onClick={() => this.handleClick()}>se déconnecter </Link></li>

                            </ul>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name
    }
}

const mapsActionToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }

}

export default connect(mapStateToProps, mapsActionToProps)(UserBanner)