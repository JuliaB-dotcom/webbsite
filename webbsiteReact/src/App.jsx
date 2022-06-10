
import './App.css'
import '/src/css/Start.css'
import Start from "./pages/Start"
import Shop from "./pages/Shop"
import Om from './pages/Om'
import Galleri from './pages/Galleri'
import insta from "/src/images/insta.jpeg"
import copyright from "/src/images/copy.png"
import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

/*Kan vara bra att använda jsx filer till de Componenter som innehåller jsx*/
/*import Products from "./Components/Products/Products";*/
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'


function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="baseDiv">
      
      <Router>
        
          <nav class="mainMenu">
            <div class="menuContainer">
            <div class="shoppingItems" onClick={showSidebar}>
              <h1 class="logo">Katarina.B</h1>
              <Badge badgeContent={2} color='secondary'></Badge>
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </div>
              <div class="hamburgerLines" onClick={showSidebar}>
                <span class="line line1"></span>
                <span class="line line2"></span>
              <span class="line line3"></span>
             
            </div>
            
          </div>
          

          <ul class={sidebar ? 'menuItems active' :'itemsMenu'}>
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
          <Route path="/om" element={<Om/>} />
          <Route path="/galleri" element={<Galleri/>} />
          </Routes>
        </main>
      
      </Router> 
      <footer>
        <a href="https://www.instagram.com/katarina1958">Följ mig på Instagram<img className="instagram" src={insta} /></a>
        <p><a href="mailto:hege@example.com">katarina.solbacken@gmail.com</a></p>
        <p className="copyText"> <img className="copySymbol" src={copyright} width="15" /> Julia Berg</p>

      </footer>
    </div>
    
  )
}

export default App