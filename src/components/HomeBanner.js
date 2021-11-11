import devtalkslogo from '../assets/img/devtalks-logo.PNG'
import avatar from '../assets/img/avatar-50px.png'
import { Link } from "react-router-dom"

export default function HomeBanner() {
    return (
        <nav class="navbar navbar-light shadow-sm bg-light px-5">
            <Link to="/">
                <img src={devtalkslogo} alt="devtalks-logo" className="devtalk-logo" />
            </Link>

            <div className='menu'>
                <img src={avatar} alt="avatar-logo " className='avatar-logo ' />
                <div className='scrolling-menu'>
                    <div className='border border-dark bg-light p-4'>
                        <Link to="/singin">
                            <button className='btn btn-dark p-2 m-2'>Se connecter</button>
                        </Link>
                        <hr/>
                        <p>Nouvel utilisateur ?</p>
                        <p className='lien-compte'><Link to="/singin">Créez un compte.</Link></p>
                </div>
            </div>
        </div>
        </nav >
    )
}