import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container">
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-3">
      
            
     
            
      <li>
      <Link className="btn btn-outline-dark "   to="/Home">Get User</Link>
      </li>
          </ul>
        </div>
        
        <Link className="btn btn-outline-light" to="/AddUser">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
