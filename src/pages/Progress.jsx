import { Card } from "../components/Card"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import progress from '../assets/progress.svg'

export function Progress(){
    return(
        <>
            <Navbar></Navbar>
            <Card title="Progreso" logo={progress}>Gana insignias y recompensas</Card>
            <Footer></Footer>
        </>
    )
}