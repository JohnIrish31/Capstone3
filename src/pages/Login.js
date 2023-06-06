import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext"
import { Navigate, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function Login (){

	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if (email !== "" && password !== ""){
			setIsActive(true)
		}else {
			setIsActive(false)
		}
	}, [ email, password ]);

	function authenticate(e){
		e.preventDefault();

		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				email : email,
				password : password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(typeof data.access !== "undefined"){
				localStorage.setItem("token", data.access);

				getUser(data.access);

				Swal.fire({
					icon : "success",
					title : "Login Successful!",
					text : "Welcome to FoodHub!"
				})

			

			}else{

				Swal.fire({
					icon : "error",
					title : "Login Unsuccessful!",
					text : "Please try again!!"
				})
			}
		})

		setEmail("");
		setPassword("");
	}

	const getUser = (token) => {
	    fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
	    	method : "GET",
	        headers: {
	            Authorization: `Bearer ${token}`
	        }
	    })
	    .then(res => res.json())
	    .then(data => {
	    	console.log(data)
	        setUser({
	           id: localStorage.setItem("id", data._id),
               isAdmin: localStorage.setItem("email", data.email),
               email: localStorage.setItem("isAdmin", data.isAdmin),
               firstName: localStorage.setItem("firstName", data.firstName),
               lastName: localStorage.setItem("lastName", data.lastName)
	        })

	       
	    })
	}


	return(
		(user.token !== null) ?
			<Navigate to="/" />
		:
		<>
		<Container fluid className="w-100 m-0 p-0">
		<Row className="w-100 m-0 p-0">
		<Col className="banner-bg vh-100 m-0 text-light d-flex flex-column align-items-center justify-content-center text-center p-5" xs={12} md={12} lg={6}>
		    <h1 className='display-1'>LOGIN NOW</h1>
		    <h1 className='display-5'>ONE STEP CLOSER TO SATISFY YOUR TASTEBUDS!</h1>
		</Col>
		    <Col xs={12} md={12} lg={6} className="d-flex flex-column align-items-center justify-content-center m-0  ">
		    <div className='w-75 vh-50 p-5 shadow-sm shadow-lg rounded my-5 d-flex flex-column align-items-center justify-content-center colr-bg'>
		    <h1 className="my-3 text-center">LOGIN</h1>
		    
		    <Form className="w-100 pb-5" onSubmit={(e) => authenticate(e)}>
		    <Form.Group controlId="userEmail" className="mb-3">
		        <Form.Label>Email address</Form.Label>
		        <Form.Control 
		            type="email" 
		            placeholder="Enter email"
		            value={email}
		            onChange={(e) => setEmail(e.target.value)}
		            required
		        />
		    </Form.Group>

		    <Form.Group controlId="password" className="mb-3">
		        <Form.Label>Password</Form.Label>
		        <Form.Control 
		            type="password" 
		            placeholder="Password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            required
		        />
		    </Form.Group>

		    {
		    isActive
	        ?
	            <Button variant="primary" className='px-2 py-2 w-25' type="submit" id="submitBtn">
	                Login
	            </Button>
	        :
	            <Button variant="danger" className='px-2 py-2 w-25' type="submit" id="submitBtn" disabled>
	                Login
	            </Button>
	        }
	        <div className='d-flex flex-column align-items-center justify-content-center'>
	        <p className='mt-5'>No account yet? <Link to={"/register"}><strong>Click Here!</strong></Link></p>
	        </div>
	    </Form>
	    </div>
	        </Col>
	    </Row>
	    </Container>
		</>
	);
}