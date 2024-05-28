import { Navbar } from '../components/Navbar.jsx'
import { Card } from '../components/Card.jsx'
import { Footer } from '../components/Footer.jsx'
import aritmetica from '../assets/aritmetica.svg';
import geometria from '../assets/geometria.svg';
import algebra from '../assets/algebra.svg';

export function Lessons(){
    return(
        <>
        <Navbar></Navbar>
        <Card title="Aritmetica" textButton="Empieza a aprender" logo={aritmetica}></Card>
        <Card title="Algebra" textButton="Empieza a aprender" logo={algebra}></Card>
        <Card title="Geometría" textButton="Empieza a aprender" logo={geometria}></Card>
        <Footer></Footer>
        </>
    )    
}