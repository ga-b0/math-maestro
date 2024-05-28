import { Card } from "../components/Card"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import trophy from '../assets/trophy.svg'

export function Achievements(){
    return(
        <>
            <Navbar></Navbar>
            <Card title="Logros" logo={trophy}>Gana insignias y recompensas</Card>
            <Footer></Footer>
        </>
    )
}