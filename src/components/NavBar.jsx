import { NavLink } from "react-router-dom";

const NavBar = ()=> {
    return(
        <nav className="navbar navbar-expand-lg d-flex m-5">
            <ul className="navbar-nav">
                <a className="navbar-brand" href="#">
                    <img className="brand" src="https://pngimg.com/d/star_wars_logo_PNG33.png"></img>
                </a>
                <li className="nav-item">
                    <NavLink className="link" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="/characters" >Characters</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="/planets" >Planets</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="/vehicles" >Vehicles</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar;