import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import AndrewCard from './AndrewCard';
import ProjectContainer from './ProjectContainer';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';



function App() {

  const [andrew, setAndrew] = useState([])
  const [projects, setProjects] = useState([])


  useEffect(() => { // fetch personal info
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


  useEffect(() => { // fetch project info
    const fetchProjects = async () => {
      try {
        const resp = await fetch("/projects")
        const data = await resp.json()
        setProjects(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="App">

      <Navbar />

        <Route path="/andrews">
            <AndrewCard andrew={andrew} setAndrew={setAndrew} />
        </Route >

        <Route path="/projects">
            <ProjectContainer projects={projects} setProjects={setProjects} />
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
