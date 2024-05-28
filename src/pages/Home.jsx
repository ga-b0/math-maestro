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
            <Card textButton="Start Learning" title="Lessons" logo={lessons}>Bite-sized math concepts</Card>
            <Card textButton="View Achievements" title="Achievements" logo={trophy}>Earn badges and rewards</Card>
            <Card textButton="Check Progress" title="Progress" logo={progress}>Track your learning journey</Card>
            <Footer></Footer>
        </>
    )
}