import devtalkLogo from '../assets/img/devtalks-logo.PNG'
import image404 from '../assets/img/image_404.png'
import '../styles/Error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <main className="d-flex justify-content-center m-5">
            <aside className='text-home little-card m-5'>

                <Link to="/">
                    <img src={devtalkLogo} alt="devtalk_logo" className='devtalk_logo mt-5 mb-4' />
                </Link>

                <p ><a href="https://www.lycos.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>Erreur 404</a> : la page que vous cherchez n'a pas été trouvé.</p>
            </aside>
            <img src={image404} alt="ecran_casse" className='image_404' />
        </main>
    )
}