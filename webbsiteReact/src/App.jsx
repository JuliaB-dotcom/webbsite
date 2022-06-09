/*import { useState } from 'react'
import logo from './logo.svg'*/
import './App.css'
import '/src/css/Start.css'
import Start from "./pages/Start"
import Shop from "./pages/Shop"
import Om from './pages/Om'
import Galleri from './pages/Galleri'
import insta from "/src/images/insta.jpeg"
import copyright from "/src/images/copy.png"
/*Kan vara bra att använda jsx filer till de Componenter som innehåller jsx*/
/*import Products from "./Components/Products/Products";*/
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'


function App() {


  return (
    <div className="baseDiv">
      
      <Router>
  
          <nav class="mainMenu">
            <h1 class="logo">Katarina.B</h1>
            <div class="menuContainer">
              <input type="checkbox" name="" id=""></input>
              <div class="hamburgerLines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </div>


            <ul class="menuItems">
              <li><Link to="/">START</Link></li>
              <li><Link to="/shop">SHOP</Link></li>
              <li><Link to="/om">OM</Link></li>
              <li><Link to="/galleri">GALLERI</Link></li>
            </ul>

          </nav>
          <div className="backgroundImg"></div>
          <h2 className="quote">Reuse the past recycle the present save the future</h2>

        <main>
          <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/om" element={Om} />
          <Route path="/galleri" element={<Galleri/>} />
          </Routes>
        </main>
      
      </Router> 
      <footer>
        <a href="https://www.instagram.com/katarina1958">Följ mig på Instagram<img className="instagram" src={insta} /></a>

      </footer>
    </div>
    
    )
  }
export default App