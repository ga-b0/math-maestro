import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ContentLesson } from "../../components/ContentLesson"


export function Ecuaciones(){
    return(
        <>
            <Navbar></Navbar>
            <ContentLesson title="Ecuaciones">
                Las ecuaciones algebraicas son una igualdad que puede expresarse como un polinomio igualado a cero.

                Vale precisar que un polinomio, en matemáticas, es una expresión formada por números y letras. Esto se suman y/o restan y pueden estar elevados a una potencia mayor a uno.

                Para explicarlo de otro modo, una ecuación algebraica está constituida por una o más incógnitas, cada una de las cuales están multiplicadas por números conocidos como coeficientes. Por ejemplo, veamos la siguiente ecuación donde los coeficientes serían 5, 8, y -3:
            </ContentLesson>
            <Footer></Footer>
        </>
    )
}