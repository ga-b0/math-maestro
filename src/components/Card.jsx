import '../styles/card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Card({ children, logo, textButton, title }) {
    const [mainTitle, setTitle] = useState(title);

    return (
        <>
            <section className='section__content'>
                <img src={logo} alt="Logo" className='content__image' />
                <h2 className='content__title'>{title}</h2>
                <p className='content_paragraph'>{children}</p>
                {mainTitle === "Lecciones" && textButton && (
                    <Link to="/lessons">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
                {mainTitle === "Logros" && textButton && (
                    <Link to="/achievements">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
                {mainTitle === "Progreso" && textButton && (
                    <Link to="/progress">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
                {mainTitle === "Aritmetica" && textButton && (
                    <Link to="/lessons/aritmetica">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
                {mainTitle === "Algebra" && textButton && (
                    <Link to="/lessons/algebra">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
                {mainTitle === "Geometría" && textButton && (
                    <Link to="/lessons/geometria">
                        <button className='content__button'>{textButton}</button>
                    </Link>
                )}
            </section>
        </>
    );
}
