import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="nav">
  
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/andrews" className="nav-link">About Me</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/projects" className="nav-link">Projects</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/authenticated_user" className="nav-link">Login</NavLink>
     
        {/* <header className="logout-btn"> <button onClick={handleLogout}>Logout</button> </header> */}
    </nav>


    )
}

export default Navbar 

