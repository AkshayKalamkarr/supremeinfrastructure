// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About'
// import Services from './components/Services';
// import Projects from './components/Projects';
// import Team from './components/Team'
// import Interiorpage from './pages/Interiorpage';
// import Civilpage from './pages/Civilpage'
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Tata from './src/pages/tata-page'

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />}>
//             <Route path='/About' element={<About />}></Route>
//             <Route path='/Services' element={<Services />}></Route>
//             <Route path='/Portfolio' element={<Portfolio />}></Route>
//             <Route path='/Team' element={<Team />}></Route>
//             <Route path='/Projects' element={<Projects />}></Route>
//             <Route path='/Contact' element={<Contact />}></Route>
//           </Route>


//          /* this is for services routes*/
//           <Route path='/Interiorpage' element={<Interiorpage />}></Route>
//           <Route path='/Civilpage' element={<Civilpage />}></Route>


//          /* this is for projects routes  */
//           <Route path='/Tata' element={<Tata />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Interiorpage from './pages/Interiorpage';
import Civilpage from './pages/Civilpage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Tata from './pages/tata-page'; // Make sure this path is correct

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
            <Route path='/Contact' element={<Contact />}></Route>
          </Route>

          {/* Routes for services */}
          <Route path='/Interiorpage' element={<Interiorpage />}></Route>
          <Route path='/Civilpage' element={<Civilpage />}></Route>

          {/* Routes for projects */}
          <Route path='/Tata' element={<Tata />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

