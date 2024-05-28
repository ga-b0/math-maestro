import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/Footer.jsx'
import { TargetLesson } from '../components/TargetLesson.jsx'
import geometria from '../assets/geometria.svg'


export function Geometria(){
    return(
        <>
            <Navbar></Navbar>
            <TargetLesson title="Geometría" themes={["Equations", "Functions"]} logo={geometria}>Geometry</TargetLesson>
            <Footer></Footer>
        </>
    )
}