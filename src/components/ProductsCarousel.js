import { Carousel } from "react-bootstrap"

export default function ProductCarousel (){
	return (
		<div>
		<Carousel id="ProductCarousel-BG" className="vh-75 w-100 d-inline-block mb-5 shadow" fade>
		      <Carousel.Item>
		        <img
		          className="d-block w-100 img-fit car-ht"
		          src="https://curiocity.com/wp-content/uploads/2022/03/BeFunky-collage-16.jpg"
		          alt="First slide"
		        />
		        <Carousel.Caption>
		          <h3>FEEL THE TASTE OF FILIPINO DELICASIES</h3>
		        </Carousel.Caption>
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100 img-fit car-ht"
		          src="https://www.seriouseats.com/thmb/sNOqOuOaiILj05PSuunyT3FuyPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Filipino-Features-Soups-and-Stews-1e81ba12ce10481caf3ff58981c347ab.jpg"
		          alt="Second slide"
		        />

		        <Carousel.Caption>
		          <h3>PROFESSIONAL AND EXPERIENCED CHEFS</h3>
		        </Carousel.Caption>
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100 img-fit car-ht"
		          src="https://www.goodnewspilipinas.com/wp-content/uploads/2020/07/Filipino-recipes.jpg"
		          alt="Third slide"
		        />

		        <Carousel.Caption>
		          <h3>TARA NA! SA FOODHUB SIGURADO TYAN AY LULUSOG</h3>
		        </Carousel.Caption>
		      </Carousel.Item>
		    </Carousel>
		    </div>
		);
}