import '../styles/navbar.css'
import calculator from '../assets/calculator.svg';
import menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
        <>
        <header className='hero'>
            <div className='hero__content'>
                <img src={calculator} alt="Calculadora" />
                <h1 className='title'>Math Maestro</h1>
            </div>
            <img src={menu} alt="Barra de navegación" />
        </header>
        </>
    )
}