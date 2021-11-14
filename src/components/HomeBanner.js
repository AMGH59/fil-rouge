import devtalkslogo from '../assets/img/devtalks-logo.PNG'
import avatar from '../assets/img/avatar-50px.png'
import { Link } from "react-router-dom"

export default function HomeBanner() {
    return (
        <nav className="navbar navbar-light shadow-sm bg-light px-5">
            <Link to="/">
                <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
            </Link>

            <ul className='menu'>
                <img src={avatar} alt="avatar-logo " className='avatar-logo logo-hover border shadow-sm p-1 ' />
                <li className='scrolling-menu'>
                    <ul className='shadow menu-content bg-light p-4 border'>
                        <li>
                        <Link to="/singin">
                            <button className='btn btn-dark  m-1'>Se connecter</button>
                        </Link>
                        </li>
                        <hr/>
                        <li>Nouvel utilisateur ?</li>
                        <li ><Link to="/singin">Créez un compte.</Link></li>
                </ul>
            </li>
        </ul>
        </nav >
    )
}