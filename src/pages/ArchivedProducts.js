// import { useContext, useState, useEffect } from "react";
// import UserContext from "../UserContext";
// import {Navigate} from "react-router-dom";
// import {Container, Col, Row, Button, Table, Modal, Form, Image} from "react-bootstrap"
// import Swal from "sweetalert2";
// import React from "react";


// export default function AllProducts(){

//      const data = {
// 		title: "VIEW ALL PRODUCTS",
// 		content: "You can Add, edit, and archive a product on this page.",
// 		destination: "/products/allItems",
// 		label: "PRODUCTS",
// 		image: {logo}
// 	}

//     const { user } = useContext(UserContext);

//     const [allProducts, setAllProducts]= useState([]);

//     const [id, setId] = useState("");
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState(0);
//     const [stocks, setStocks] = useState(0);
//     const [imgSource, setImgSource] = useState("");

//     const [isActive, setIsActive] = useState(false);


//      const fetchData = () =>{
//           fetch(`${process.env.REACT_APP_API_URL}/products/archivedProducts`, {
//                headers:{
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`
//                }
//           })
//           .then(res => res.json())
//           .then(data => {
//                console.log(data);

//                 setAllProducts(data.map(product =>{
//                     return (
//                         <>
                        
//                         <tr key={product._id}>
//                             <td>{product._id}</td>
//                             <td>{product.name}</td>
//                             <td>{product.description}</td>
//                             <td>{product.price}</td>
//                             <td>{product.stocks}</td>
//                             <td>{product.isActive ? "Active" : "Inactive"}</td>
//                             <td>
//                                 {(product.isActive)
//                                 ?
//                                 <Button variant="danger" size="sm" onClick={() => archive(product._id, product.name)}>Archive</Button>
//                                 :
//                                 <>
//                                 <Button variant="success" className="mx-1" size="sm" onClick={() => unarchive(product._id, product.name)}>Unarchive</Button>
//                                 <Button variant="secondary" className="mx-1" size="sm" onClick={() => openEdit(product._id)}   >Edit</Button>
                                
//                                 </>}
//                             </td>
//                         </tr>
//                         </>
//                     )
//                 }));
//           });
//      }


//           return(
                           
//              <Container fluid className="w-100 d-flex h-100 m-0 p-0">
//              <Row className="w-100 m-0 p-0">
//              <Col className="bg-white d-flex  pt-3 m-0 shadow" xs={12} md={2} lg={2}>
//              <AppSideNav/>
//              </Col>
            
//              <Col className="colr-bg m-0 p-5 d-flex justify-content-center" xs={12} md={10} lg={10}>
//              {
//                  localStorage.getItem("isAdmin") === "true"
//                ?
//              <>
//                <div className="w-100 bg-white  rounded shadow-sm shadow-lg p-5">
//                     <div className="my-2 text-center">
//                          <h1>VIEW ALL PRODUCTS</h1>
//                     </div>
//                  <Table striped bordered hover className="shadow-lg shadow-sm ">
//                       <thead className="banner-bg text-light">
//                           <tr>
//                           <th>ID</th>
//                           <th>Name</th>
//                           <th className="w-25">Description</th>
//                           <th>Price</th>
//                           <th>Stocks</th>
//                           <th>Status</th>
//                           <th>Actions</th>
//                           </tr>
//                       </thead>
//                  <tbody>
//                      {allProducts}
//                  </tbody>
//                  </Table>

//      );

// }