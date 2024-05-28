import '../styles/footer.css'
import lessons from '../assets/lessons2.svg';
import trophy from '../assets/trophy2.svg';
import progress from '../assets/progress2.svg';
import configuration from '../assets/configuration.svg';
import home from '../assets/home.svg';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <>
            <footer className="footer">
                <div className='footer__container'>
                    <Link to='/'>
                        <img src={home} alt="" />
                    </Link>
                    <Link to="/lessons">
                        <img src={lessons} alt="" />
                    </Link>
                    <Link to="/achievements">
                        <img src={trophy} alt="" />
                    </Link>
                    <Link to="/progress">
                        <img src={progress} alt="" />
                    </Link>
                </div>
                <img src={configuration} alt="" />
            </footer>
        </>
    )
}