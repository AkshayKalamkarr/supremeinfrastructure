import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Interiorpage from "./pages/interior-page";
import Civilpage from "./pages/civil-page";
import ClientPage from "./pages/clients-page";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App w-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          {/* <Route path='/Client' element={<Client />} /> */}
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Footer' element={<Footer />} />


          <Route path='/Interiorpage' element={<Interiorpage />} />
          <Route path='/Civilpage' element={<Civilpage />} />
          <Route path='/clients' element={<ClientPage />} />
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
