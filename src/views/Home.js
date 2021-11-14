import '../styles/Home.css'
import { Link } from 'react-router-dom'
import laptopHome from '../assets/img/laptop-home.png'
export default function Home() {
    return (
        <main className='d-flex justify-content-center flex-wrap items-center mt-5'>
            <aside className='text-home little-card m-5'>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ipsa dolorum amet reiciendis</h1>
                <p>aliquid distinctio culpa et eligendi voluptas cumque? Illo unde fugiat dolorum accusamus eum ratione nemo! Consequuntur, suscipit.
                </p>
            <Link to="/singin">
                <button className='btn btn-dark btn-lg m-4'>S'inscrire</button>
            </Link>
            </aside>
            <img src={laptopHome} alt="laptopHome-pic " className='laptopHome-pic m-5' />
            
        </main>
    )

}