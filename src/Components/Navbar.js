import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="#" style={{color : "white"}}>NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/" style={{color : "#c3bbbb"}}>Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="#" style={{color : "#c3bbbb"}}>About</Link>
            </li>
            
            <li className="nav-item"><Link className="nav-link" to="/science" style={{color : "#c3bbbb"}}>Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports" style={{color : "#c3bbbb"}}>Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology" style={{color : "#c3bbbb"}}>Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business" style={{color : "#c3bbbb"}}>Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color : "#c3bbbb"}}>Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health" style={{color : "#c3bbbb"}}>Health</Link></li>
            </ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
