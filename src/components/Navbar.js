import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-github"></div>
            <ul className="navbar-links">
                <NavLink to="/cds">CDs</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/vinyls">Vinyls</NavLink>
            </ul>
            <div className="navbar-cart"></div>
        </nav>
    )
}

export default Navbar