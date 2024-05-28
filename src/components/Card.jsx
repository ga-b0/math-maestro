import '../styles/card.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Card({children, logo, textButton, title}){

    const [mainTitle, setTitle] = useState(title)

    return(
        <>
        <section className='section__content'>
            <img src={logo} alt="Logo" className='content__image'/>
            <h2 className='content__title'>{title}</h2>
            <p className='content_paragraph'>{children}</p>
            {mainTitle === "Lessons" && (
                <Link to="/lessons">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
            {mainTitle === "Achievements" && (
                <Link to="/achievements">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
            {mainTitle === "Progress" && (
                <Link to="/progress">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
            {mainTitle === "Aritmetica" && (
                <Link to="/lessons/aritmetica">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
            {mainTitle === "Algebra" && (
                <Link to="/lessons/algebra">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
            {mainTitle === "Geometría" && (
                <Link to="/lessons/geometria">
                <button className='content__button'>{textButton}</button>
                </Link>
            )}
        </section>
        </>
    )
}