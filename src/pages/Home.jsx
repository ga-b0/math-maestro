import { Navbar } from '../components/Navbar.jsx'
import { Card } from '../components/Card.jsx'
import { Footer } from '../components/Footer.jsx'
import trophy from '../assets/trophy.svg';
import progress from '../assets/progress.svg';
import lessons from '../assets/lessons.svg';


export function Home(){
    return(
        <>
            <Navbar></Navbar>
            <Card textButton="Empieza a aprender" title="Lecciones" logo={lessons}>Conceptos matemáticos en trocitos</Card>
            <Card textButton="Mira tus logros" title="Logros" logo={trophy}>Gana insignias y recompensas</Card>
            <Card textButton="Comprobar el progreso" title="Progreso" logo={progress}>Siga su viaje de aprendizaje</Card>
            <Footer></Footer>
        </>
    )
}