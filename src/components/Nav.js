import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">CRUD operation</Link>
            <div class="nav">
                <Link to="/create-employees" class="nav-link">Create Employee</Link>
                <Link to="/employees-list" class="nav-link">Employee List</Link>
            </div>
        </nav>
    )
}
export default Nav;

