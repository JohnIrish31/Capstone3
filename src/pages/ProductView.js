// import { useState, useEffect, useContext } from "react";
// import {Container, Card, Button, Row, Col, Form} from "react-bootstrap";
// import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import HomeBanner from "../components/HomeBanner";
// import HotDeals from "../components/HotDeals";
// import UserContext from "../UserContext";
// import logo from "../images/FoodHUb.png"



// export default function ProductView(){

// 	const data = {
// 		title: "YOU ARE ABOUT TO MAKE A TRANSACTION",
// 		content: "Buy products using your E-wallet. Less hassle, more efficient!",
// 		destination: "/products",
// 		label: "Other Products",
// 		image: {logo}
// 	}

// 	const { user } = useContext(UserContext);


// 	const { productId } = useParams();

// 	const navigate = useNavigate();


// 	const [name, setName] = useState('');
// 	const [description, setDescription] = useState('');
//     const [stocks, setStocks] = useState('');
//     const [imgSource, setImg] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [quantity, setQuantity] = useState(1);

// 	useEffect(()=>{
// 		console.log(productId);

// 		fetch(`${ process.env.REACT_APP_API_URL }/products/${productId}`)
// 		.then(res => res.json())
// 		.then(data => {

// 			console.log(data);

// 			setName(data.name);
//             setImg(data.imgSource);
// 			setDescription(data.description);
//             setStocks(data.stocks);
// 			setPrice(data.price);

// 		});

// 	}, [productId])


	

// 	const buy = (productId) => {
//         fetch(`${process.env.REACT_APP_API_URL}/users/checkout`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             },
//             body: JSON.stringify({
//                 totalAmount: price,
//                 products: [
//                     {
//                         productId: productId,
//                         name: name,
//                         quantity: quantity,
// 						totalAmount: price * quantity
//                     }
//                 ]
//             })
//         })
//             .then(res => res.json())
//             .then(data => {

//                 console.log(data);

//                 if (data) {
//                     Swal.fire({
//                         title: "PRODUCT SOLD!",
//                         icon: "success",
//                         text: `Thank you for purchasing ${name}. `
//                     })
//                     navigate("/products");
//                 } else {
//                     Swal.fire({
//                         title: "Oops! Something went wrong",
//                         icon: "error",
//                         text: "Please try again."
//                     })
//                 }
//             });
//     }


// 	return(
		
// 		<>
		
// 		{
// 			localStorage.getItem("isAdmin") === "true"
// 				?
// 					<Navigate to="/dashboard" />
// 				:
// 		<div className="p-5">
// 		<HomeBanner bannerProp={data}/>
// 		<div className="d-flex align-items-center justify-content-center flex-column">
// 			<Col className="my-2 " xs={12} md={12} lg={6}>
//             <Card className="my-3 w-100  card-height shadow card-border shadow-md card-bg ">
//             <Card.Img className='product-img-fit'
//                 src={imgSource}
//             />
//                 <Card.Header className='py-3 my-3 '>
//                 <Card.Title>
//                      {name}
//                 </Card.Title>
//                 </Card.Header>
//                 <Card.Body>
//                 <Card.Subtitle>
//                     Description
//                 </Card.Subtitle>
//                 <Card.Text>
//                     {description}
//                 </Card.Text>
//                 <Card.Subtitle>
//                     Price
//                 </Card.Subtitle>
//                 <Card.Text>
//                     Php {price}
//                 </Card.Text>
//                 <Card.Subtitle>
//                     {Stocks}
//                 </Card.Subtitle>
				
//                 <Card.Text>
//                     {stocks} available
//                 </Card.Text>
// 				<Card.Subtitle>
//                     Quantity
//                 </Card.Subtitle>
// 				<Form.Control className="w-25 my-2"
//                     type="number"
//                     required
// 					value={quantity}
// 					onChange={event => setQuantity(event.target.value)}

//                 />
//                 </Card.Body>
// 			<div className="text-center">
//             <Card.Footer>
			
//             {
				
// 				(user.id !== null)
// 				?
// 					<Button id="checkOutBtn" className='w-50 btn-dark my-3 shadow' onClick={() => buy(productId)}>CHECK OUT</Button>
// 				:
// 					<Button className='w-50 btn-danger my-3 shadow' as={Link} to={`/login`}>LOGIN TO BUY</Button>
// 			}
//             </Card.Footer>
// 			</div>
			

//         </Card>
//             </Col>
// 			</div>
// 		<HotDeals/>
// 		</div>
// 		}
		
		
		
		

// 		</>
// 	)
	
// 	}
