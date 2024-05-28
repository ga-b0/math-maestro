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
        <Card title="Aritmetica" textButton="Start Learning" logo={aritmetica}></Card>
        <Card title="Algebra" textButton="Start Learning" logo={algebra}></Card>
        <Card title="Geometría" textButton="Start Learning" logo={geometria}></Card>
        <Footer></Footer>
        </>
    )    
}