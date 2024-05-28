import '../styles/target.css'
import { Link } from 'react-router-dom';

export function TargetLesson({children, themes, title, logo}) {

    const themeRoutes = {
        'Ecuaciones': '/lessons/algebra/ecuaciones',
        'Inecuaciones': '/lessons/algebra/inecuaciones',
        'Funciones': '/lessons/algebra/funciones',
        'Polinomios': '/lessons/algebra/polinomios',
    };

    return (
        <>
            <section className="section__container">
                <img src={logo} alt={title} className="section__image"/>
                <h2 className="section__title">{title}</h2>
                <div className="section__themes">
                    {themes.map((value, index) => (
                        themeRoutes[value] ? (
                            <Link to={themeRoutes[value]} key={index}>
                                <h2 className="section__item">{value}</h2>
                            </Link>
                        ) : (
                            <h2 key={index} className="section__item">{value}</h2>
                        )
                    ))}
                </div>
            </section>
        </>
    )
}
