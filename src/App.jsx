import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { Footer } from './components/Footer';
import trophy from './assets/trophy.svg';
import progress from './assets/progress.svg';
import lessons from './assets/lessons.svg';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Card textButton="Start Learning" title="Lessons" logo={lessons}>Bite-sized math concepts</Card>
      <Card textButton="View Achievements" title="Achievements" logo={trophy}>Earn badges and rewards</Card>
      <Card textButton="Check Progress" title="Progress" logo={progress}>Track your learning journey</Card>
      <Footer></Footer>
    </>
  )
}

export default App
