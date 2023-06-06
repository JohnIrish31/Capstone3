import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext"
import { useContext } from "react"

export default function AppNavbar(){

	const { user } = useContext(UserContext);
	const userFullName = `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`
	console.log(userFullName)

	
	return(

	<Navbar expand="lg"  className="shadow sticky-top m-0 px-5" id="Nav-BG">
	    <Navbar.Brand as={ NavLink } to={"/"} className="font-weight-bold"
	    id="text">
	    <img
	    alt=""
	    src={require('../images/FoodHub.png')}
	    width="30"
	    height="30"
	    className="d-inline-block align-top rounded"
	    />{' '}
	    FoodHub
	</Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">

	       <Nav className="ms-auto ">
	       {
	           localStorage.getItem("isAdmin") === "true"
	           ?
	           <>
	           <Nav.Link as={ NavLink } to="/dashboard" end id="text">Dashboard</Nav.Link>
	           </>
	           :
	           <>
	           <Nav.Link as={ NavLink } to="/" end id="text">Home</Nav.Link>
	           <Nav.Link as={ NavLink } to="/products" end id="text">Products</Nav.Link>
	           </>
	       }
	       {
	           (user.id !== null)
	           ?
	               <>
	               
	               
	               <NavDropdown title={userFullName} align="end" id="collasible-nav-dropdown" end>
	               <NavDropdown.Item as={ NavLink } to="/settings" end >Account Settings</NavDropdown.Item>
	               <NavDropdown.Item as={ NavLink } to="/report" end >Report</NavDropdown.Item>
	               <NavDropdown.Divider />
	               <NavDropdown.Item as={ NavLink } to="/logout" end >Logout</NavDropdown.Item>
	               </NavDropdown>
	               </>
	           :
	           <>
	               <Nav.Link as={ NavLink } to="/login" end id="text">Login</Nav.Link>
	               <Nav.Link as={ NavLink } to="/register" end id="text">Register</Nav.Link>
	           </>
	       }
	   </Nav>
	  
	    </Navbar.Collapse>
	</Navbar>
		)
}