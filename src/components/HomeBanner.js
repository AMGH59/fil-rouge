import devtalkslogo from '../assets/img/devtalks-logo.PNG'
import avatar from '../assets/img/avatar-50px.png'
import {Link} from "react-router-dom"

export default function HomeBanner() {
    return (
        <nav class="navbar navbar-light bg-light px-5">
        <Link to="/">
            <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
        </Link>
        <Link to="/singin">
            <img src={avatar} alt="avatar-logo" />
        </Link>
    </nav>
    )
}