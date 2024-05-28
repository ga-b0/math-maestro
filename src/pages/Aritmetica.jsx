import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/Footer.jsx'
import { TargetLesson } from '../components/TargetLesson.jsx'
import aritmetica from '../assets/aritmetica.svg'


export function Aritmetica(){
    return(
        <>
            <Navbar></Navbar>
            <TargetLesson title="Aritmetica" themes={["Equations", "Functions"]} logo={aritmetica}>Algebra</TargetLesson>
            <Footer></Footer>
        </>
    )
}