import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/ProductCard";
import ProductsCarousel from "../components/ProductsCarousel";
import UserContext from "../UserContext";
import {Row} from "react-bootstrap"

export default function Products() {


	const { user } = useContext(UserContext);


	const [products, setProducts] = useState([]);

	useEffect(() =>{

		fetch(`${process.env.REACT_APP_API_URL}/products/allProducts`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setProducts(data.map(products =>{
				return(
                        <ProductCard key={products._id} props={products}/>
				);
			}));
		})
	}, []);


	return(
		 localStorage.getItem("isAdmin") === "true"
		?
			<Navigate to="/products" />
		:	
		<>
        <div className="p-5">
        	
        	<ProductsCarousel/>
			<h1 id="PRODUCT-TXT">FoodHub Menu</h1>
			<Row className="my-3 text-dark h-100">
			{products}
			</Row>
			
        </div>
		</>
	)
}