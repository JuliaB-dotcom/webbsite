/*import { useState } from 'react'
import logo from './logo.svg'*/
import './App.css'
import Start from "./Start"
/*Kan vara bra att använda jsx filer till de Componenter som innehåller jsx*/
/*import Products from "./Components/Products/Products";*/

function App() {


  return (
    <Start />
    )
  }


export default App

  /*< Router >
      <nav>
        
        <Link to="/">start</Link>
        <Link to="/shop">shop</Link>
        <Link to="/om">om</Link>
        <Link to="/kontakt">kontakt</Link>
        <Link to="/gallerit">galleri</Link>
      </nav>

      <main>
       
        <Route path="/" exact component={Start} />
        <Route path="/shop" component={Shop} />
        <Route path="/om" exact component={Om} />
        <Route path="/kontakt" exact component={Kontakt} />
        <Route path="/galleri" exact component={Galleri} />
      </main>
    </Router >
      

/*const [count, setCount] = useState(0)

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
          </a>
      </p>
    </header>
  </div>
)
}
*/


