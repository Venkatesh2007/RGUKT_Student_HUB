import './App.css'
import Home from './components/Home'
import Assignment from './components/Assignment'
import Student from './components/Student'
import NFPage from './components/NotFoundPage'
import AssignmentsFE1 from './components/AssignmentFoundE1'
import SubjectsFE1 from './components/SubjectsFoundE1'
import QPfound from './components/QPfound'
import Subject from './components/Subject'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HubState from './context/HubState'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <main>
      <HubState>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
        <Route path="/Assignments" element={<Assignment />} ></Route>
        <Route path="/Subjects" element={<Subject />} ></Route>
          <Route path="/Student" element={<Student />} ></Route>
          <Route path="/Assignments/NotFound" element={<NFPage theme="Assignments"/>}></Route>
          <Route path="/Assignments/Found/E1" element={<AssignmentsFE1/>}></Route>
          <Route path="/Subjects/NotFound" element={<NFPage theme="Subjects"/>}></Route>
          <Route path="/Subjects/Found/E1" element={<SubjectsFE1/>}></Route>
          <Route path="/QPsection" element={<QPfound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </HubState>

    </main>
  )
}
