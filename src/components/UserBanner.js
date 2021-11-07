import devtalkslogo from '../assets/img/devtalks-logo.PNG'
import { Link } from "react-router-dom"
import userPic from '../assets/img/user-pic.jpg'


export default function UserBanner() {
    return (
        <nav class="navbar navbar-light bg-light px-5">
            <Link to="/">
                <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
            </Link>
            <Link to="/user">
                <img src={userPic} alt="user-logo" />
            </Link>
        </nav>
    )
}