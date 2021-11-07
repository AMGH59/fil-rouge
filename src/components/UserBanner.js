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
        this.state = {  }
    }

    handleClick=()=>{
        deleteCurrentUser()
        this.props.logOut()
    }

    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light px-5">
            <Link to="/">
                <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
            </Link>
            <div>
                <button class='btn btn-dark p-2 m-1' onClick={() => this.handleClick()}>Se déconnecter</button>
            <Link to="/user">
                <img src={userPic} alt="user-logo" />
            </Link>
            </div>
        </nav>
        );
    }
}

const mapsActionToProps = (dispatch) => {
    return{
        logOut: () => dispatch(logOut())
    }
    
}

export default connect(null,mapsActionToProps)(UserBanner)