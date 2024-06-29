import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Location from './components/Location';
import Projects from './components/Projects';
import Team from './components/Team'
import Interiorpage from './pages/Interiorpage';
import Civilpage from './pages/Civilpage'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Services' element={<Services />}></Route>
            <Route path='/Portfolio' element={<Portfolio />}></Route>
            <Route path='/Team' element={<Team />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
            <Route path='/Location' element={<Location />}></Route>
          </Route>


        /* this is for services routes*/
          <Route path='/Interiorpage' element={<Interiorpage />}></Route>
          <Route path='/Civilpage' element={<Civilpage />}></Route>
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
