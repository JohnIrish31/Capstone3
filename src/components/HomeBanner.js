import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";


export default function HomeBanner({bannerProp}){
	const {title, content, destination, label, image} = bannerProp;
	return(
        <div className="vh-50 banner-bg text-light d-flex align-items-center justify-content-center mb-5">
		<Row>
			<Col className="text-center d-flex flex-column justify-content-center align-items-center" lg={12}>
                <Image
                className="d-block w-50  carousel-height circle-crop"
                src={require('../images/FoodHub.png')}
                roundedCircle
                fluid
                />
				<h2>{title}</h2>
            	<p>{content}</p>
				<Button className="w-50 btn-outline-light" as = {Link} to={destination} variant="">{label}</Button>
			</Col>
		</Row>
        </div>
	)
}