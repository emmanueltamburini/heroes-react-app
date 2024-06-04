import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 p-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">App</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}  
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}  
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </ul>
                </div>
                <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary">
                            Testing
                        </span>
                        <button className="nav-item nav-link btn">
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}