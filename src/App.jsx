import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Location from "./components/Location";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Interiorpage from "./pages/Interiorpage";
import Civilpage from "./pages/Civilpage";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className='App w-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Location' element={<Location />} />

          <Route path='/Interiorpage' element={<Interiorpage />} />
          <Route path='/Civilpage' element={<Civilpage />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Projects/> */}
    </div>
  );
}

export default App;
