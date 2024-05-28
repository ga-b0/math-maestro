import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Lessons } from "./pages/Lessons";
import { Achievements } from "./pages/Achievements";
import { Progress } from "./pages/Progress";
import { Home } from "./pages/Home";
import { Aritmetica } from "./pages/Aritmetica";
import { Geometria } from "./pages/Geometria";
import { Algebra } from "./pages/Algebra";
import { Ecuaciones } from "./pages/Algebra/Ecuaciones";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />}>
        </Route>
        <Route path="/lessons/aritmetica" element={<Aritmetica />} />
        <Route path="/lessons/algebra" element={<Algebra />} />
        <Route path="/lessons/algebra/ecuaciones" element={<Ecuaciones />} />
        <Route path="/lessons/geometria" element={<Geometria />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </>
  );
}

export default App;
