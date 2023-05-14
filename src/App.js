// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Navbar from './Navbar';
// import Home from './/Home';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';


// import Rating from './Components/Rating';
  
function App() {
  return (

    <div>
      <Router>
          <Navbar />
          
          <Routes>
             

              <Route exact path="/about" element={ <About/> }>
              </Route>
              
              
            


            <Route exact path="/contact" element={ <Contact/> }>
            </Route>



            <Route exact path="/FAQ" element={ <FAQ/> }>
            </Route>

          </Routes>
        </Router>

          

    
    
  
     
    </div>
  );
}
  
export default App;