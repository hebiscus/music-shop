import { NavLink } from "react-router-dom";
import githubLogo from "../resources/logos/github-mark-white.svg";
import Sidebar from "./Sidebar";
import'../styles/navbar-style.scss';

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-github">
                    <img src={githubLogo} className="github-logo" alt="github logo"></img>
                    <h2>hebiscus</h2>
                </div>
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/cds">CDs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vinyls">Vinyls</NavLink>
                    </li>
                </ul>   
                <Sidebar /> 
            </nav>
            
        </>
    )
}

export default Navbar