import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import clients from "./components/Client";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Team from "./components/Team";
import ClientPage from "./pages/clients-page";
import Footer from "./components/Footer";

/////////// service pages
import Interiorpage from "./pages/service-pages/interior-page";
import Civilpage from "./pages/service-pages/civil-page";

////////// project pages
import Tata from './pages/project-pages/tata-page'
import Atlantas from './pages/project-pages/atlantas-page'
import Coact from './pages/project-pages/coact-page'
import Greenworld from './pages/project-pages/green-world'

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

          ////////// service page
          <Route path='/Interiorpage' element={<Interiorpage />} />
          <Route path='/Civilpage' element={<Civilpage />} />
          <Route path='/clients' element={<ClientPage />} />


          ///// team page
          <Route path='/Tata' element={<Tata />}></Route>
          <Route path='/Atlantas' element={<Atlantas />}></Route>
          <Route path='/Coact' element={<Coact />}></Route>
          <Route path='/greenworld' element={<Greenworld/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
