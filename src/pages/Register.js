import { useState, useEffect, useContext } from 'react';
import { Form, Button, Overlay, Col, Row, Container, Carousel } from 'react-bootstrap';
import { useNavigate,Navigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';


export default function Register(){

	const { user } = useContext(UserContext);

	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [isActive, setIsActive] = useState('');

	function registerUser(e) {

	    // Prevents page redirection via form submission
	    e.preventDefault();

	    fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
	        method: "POST",
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            email: email
	        })
	    })
	    .then(res => res.json())
	    .then(data => {

	        console.log(data);

	        if(data === true){

	            Swal.fire({
	                title: 'Duplicate email found',
	                icon: 'error',
	                text: 'Please provide a different email.'   
	            });

	        } else {

	            fetch(`${ process.env.REACT_APP_API_URL }/users/register`, {
	                method: "POST",
	                headers: {
	                    'Content-Type': 'application/json'
	                },
	                body: JSON.stringify({
	                    firstName: firstName,
	                    lastName: lastName,
	                    email: email,
	                    password: password1,
	                    mobileNo: mobileNo
	                })
	            })
	            .then(res => res.json())
	            .then(data => {

	                console.log(data);

	                if(data === true){

	                    // Clear input fields
	                    setFirstName('');
	                    setLastName('');
	                    setEmail('');
	                    setMobileNo('');
	                    setPassword1('');
	                    setPassword2('');

	                    Swal.fire({
	                        title: 'Registration successful',
	                        icon: 'success',
	                        text: 'Welcome to Zuitt!'
	                    });

	                    // Allows us to redirect the user to the login page after registering for an account
	                    navigate("/login");

	                } else {

	                    Swal.fire({
	                        title: 'Something wrong',
	                        icon: 'error',
	                        text: 'Please try again.'   
	                    });

	                };

	            })
	        };

	    })

	}

	useEffect(() => {

	    // Validation to enable submit button when all fields are populated and both passwords match
	    if((firstName !== '' && lastName !== '' && email !== '' && mobileNo.length === 11 && password1 !== '' && password2 !== '') && (password1 === password2)){
	        setIsActive(true);
	    } else {
	        setIsActive(false);
	    }

	}, [firstName, lastName, email, mobileNo, password1, password2]);

	return(

		(user.token !== null) ?
			<Navigate to="/" />

		:

		<>
		<Container fluid className=" w-100 m-0 p-0">
			<Row className="w-100 m-0 p-0">
				 <Col className=" vh-100 m-0 text-light d-flex flex-column align-items-center justify-content-center text-center mt-5 p-5" xs={12} md={6} lg={6}>
				  <Carousel id="image-car" fade>
				       <Carousel.Item id="car-colr">
				         <img
				           className="d-block w-100"
				           src="https://travellingfoodie.net/wp-content/uploads/2022/02/Bs-Sizzling-Kitchen-Mississauga-Travelling-Foodie.jpg"
				           alt="First slide"
				         />
				         <Carousel.Caption>
				           <h2>REGISTER NOW</h2>
				           <p>YOU DONT WANT TO MISS OUR OFFERS FOR YOU!</p>
				         </Carousel.Caption>
				       </Carousel.Item>
				       <Carousel.Item id="car-colr">
				         <img
				           className="d-block w-100"
				           src="https://blog.remitly.com/wp-content/uploads/2021/12/varieties-of-Filipino-food-on-a-table.jpg"
				           alt="Second slide"
				         />

				         <Carousel.Caption>
				           <h2>FREE DELIVERY!</h2>
				           <p>Free Delivery minimun orders of Php 3000!</p>
				         </Carousel.Caption>
				       </Carousel.Item>
				       <Carousel.Item id="car-colr">
				         <img
				           className="d-block w-100"
				           src="https://4.bp.blogspot.com/-bR3lEpxbgUo/TotDX8dLGfI/AAAAAAAAAAo/MkNvf3DGeSw/s1600/char.jpg"
				           alt="Third slide"
				         />

				         <Carousel.Caption>
				           <h2>BIG DISCOUNT!</h2>
				           <p>
				             Purchase one of our best selling products and get a discount up to 15%!
				           </p>
				         </Carousel.Caption>
				       </Carousel.Item>
				     </Carousel>
				</Col>
				<Col xs={12} md={6} lg={6} className="d-flex flex-column align-items-center justify-content-center mt-5">
				<div className='w-75 my-5 py-5 shadow-sm shadow-lg rounded d-flex flex-column align-items-center justify-content-center' id="reg-BG">
				<h1 className=" text-center text-light" id="text">REGISTER</h1>
				
				<Form className="w-75 text-light" onSubmit={e => registerUser(e)}>

				<Form.Group className="mb-3" controlId="firstName">
				    <Form.Label>First Name</Form.Label>
				    <Form.Control
				        type="text"
				        placeholder="Enter first name"
				        value={firstName}
				        onChange={e => setFirstName(e.target.value)}
				        required
				    />
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
						    <Form.Label>Last Name</Form.Label>
						    <Form.Control
						        type="text"
						        placeholder="Enter last name"
						        value={lastName}
						        onChange={e => setLastName(e.target.value)}
						        required
						    />
						</Form.Group>

						<Form.Group className="mb-3" controlId="emailAddress">
						    <Form.Label>Email Address</Form.Label>
						    <Form.Control
						        type="email"
						        placeholder="Enter email"
						        onChange={e => setEmail(e.target.value)}
						        value={email}
						        required
						    />
						    <Form.Text className="text-muted">
						    We'll never share your email with anyone else.
						    </Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="mobileNo">
						    <Form.Label>Mobile Number</Form.Label>
						    <Form.Control
						        type="number"
						        placeholder="09xxxxxxxxx"
						        value={mobileNo}
						        onChange={e => setMobileNo(e.target.value)}
						        required
						    />
						</Form.Group>
						

						<Form.Group className="mb-3" controlId="password1">
						    <Form.Label>Password</Form.Label>
						    <Form.Control
						        type="password" 
						        placeholder="Enter Password"
						        value={password1}
						        onChange={e => setPassword1(e.target.value)}
						        required
						    />
						</Form.Group>

						<Form.Group className="mb-3" controlId="password2">
						    <Form.Label>Verify Password</Form.Label>
						    <Form.Control
						        type="password" 
						        placeholder="Verify Password"
						        value={password2}
						        onChange={e => setPassword2(e.target.value)}
						        required
						    />
						</Form.Group>

						
						{
						    isActive
						    ?
						        <Button variant="primary" type="submit" id="submitBtn">
						        Submit
						        </Button>
						    :
						        <Button variant="danger" type="submit" id="submitBtn" disabled>
						        Submit
						        </Button>
						}
						<div className='d-flex flex-column align-items-center justify-content-center'>
						<p className='mt-5'>Already have an account? <Link to={"/login"}><strong>Login Here!</strong></Link></p>
						</div>
						</Form>
						</div>
						</Col>
					</Row>
				</Container>
		
		</>

		);
}