import '../styles/card.css'

export function Card({children, logo, textButton, title}){
    return(
        <>
        <section className='section__content'>
            <img src={logo} alt="Logo" className='content__image'/>
            <h2 className='content__title'>{title}</h2>
            <p className='content_paragraph'>{children}</p>
            <button className='content__button'>{textButton}</button>
        </section>
        </>
    )
}