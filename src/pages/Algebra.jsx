import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/Footer.jsx'
import { TargetLesson } from '../components/TargetLesson.jsx'
import algebra from '../assets/algebra.svg'

export function Algebra(){
    return(
        <>
            <Navbar></Navbar>
            <TargetLesson title="Algebra" themes={["Ecuaciones", "Funciones", "Polinomios", "Inecuaciones"]} logo={algebra}>Algebra</TargetLesson>
            <Footer></Footer>
        </>
    )
}