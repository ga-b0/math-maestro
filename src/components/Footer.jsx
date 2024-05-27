import '../styles/footer.css'
import lessons from '../assets/lessons2.svg';
import trophy from '../assets/trophy2.svg';
import progress from '../assets/progress2.svg';
import configuration from '../assets/configuration.svg';

export function Footer(){
    return(
        <>
            <footer className="footer">
                <div className='footer__container'>
                    <img src={lessons} alt="" />
                    <img src={trophy} alt="" />
                    <img src={progress} alt="" />
                </div>
                <img src={configuration} alt="" />
            </footer>
        </>
    )
}