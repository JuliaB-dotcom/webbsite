/*import { useState } from 'react'
import logo from './logo.svg'*/
import './App.css'
import '/src/css/Start.css'
import Start from "./pages/Start"
import Shop from "./pages/Shop"
import Om from './pages/Om'
import insta from "/src/images/insta.jpeg"
import copyright from "/src/images/copy.png"
/*Kan vara bra att använda jsx filer till de Componenter som innehåller jsx*/
/*import Products from "./Components/Products/Products";*/
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

function App() {


  return (
    <div className="baseDiv">
      <div>
        
      </div>
      <Router>
        <nav>
          <Link to="/">START</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/kontskt">KONTAKT</Link>
          <Link to="/om">OM</Link>
          <Link to="/galleri">GALLERI</Link>
        </nav>
        <div className="backgroundImg"></div>
          <h2 className="quote">Reuse the past recycle the present save the future</h2>
       
        <main>
          <Routes>
          <Route path="/" exact component={Start} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/om" exact component={Om} />
          </Routes>
        </main>
        <footer>
          <a href="https://www.instagram.com/katarina1958">Följ mig på Instagram<img className="instagram" src={insta}/></a>
          <p><a href="mailto:hege@example.com">katarina.solbacken@gmail.com</a></p>
          <p className="copyText"> <img className="copySymbol" src={copyright} width="15" /> Julia Berg</p>
        </footer>
      </Router> 
    </div>
    )
  }


export default App

  