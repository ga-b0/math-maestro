import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { Footer } from './components/Footer';
import trophy from './assets/trophy.svg';
import progress from './assets/progress.svg';
import lessons from './assets/lessons.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Lessons } from './pages/Lessons';
import { Achievements } from './pages/Achievements';
import { Progress } from './pages/Progress';


function App() {

  return (
    <>
      <Routes>
        <Route path='/lessons' element={<Lessons />}></Route>
        <Route path='/achievements' element={<Achievements />}></Route>
        <Route path='/progress' element={<Progress />}></Route>
      </Routes>
      <Navbar></Navbar>
      <Card textButton="Start Learning" title="Lessons" logo={lessons}>Bite-sized math concepts</Card>
      <Card textButton="View Achievements" title="Achievements" logo={trophy}>Earn badges and rewards</Card>
      <Card textButton="Check Progress" title="Progress" logo={progress}>Track your learning journey</Card>
      <Footer></Footer>
    </>
  )
}

export default App
