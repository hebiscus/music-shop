import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-github"></div>
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
            <div className="navbar-cart"></div>
        </nav>
    )
}

export default Navbar