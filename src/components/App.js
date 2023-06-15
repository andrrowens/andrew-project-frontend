import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import AndrewCard from './AndrewCard'
import { Route } from 'react-router-dom';


function App() {

  const [andrew, setAndrew] = useState([])

  useEffect(() => { // fetch user info
    const fetchAndrew = async () => {
      try {
        const resp = await fetch("/andrews")
        const data = await resp.json()
        setAndrew(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchAndrew()
  }, [])

  return (
    <div className="App">

      <Route path="/andrews">
            <AndrewCard andrew={andrew} setAndrew={setAndrew} />
      </Route >



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
