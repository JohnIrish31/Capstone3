import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function FeaturedProducts() {
    return (
        <div className='d-flex flex-column my-5 banner-bg p-5 text-white '>
        <h2>All Time Favourite</h2>
        <Row className="my-3 text-dark h-100">
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height" >
                <Card.Img id="BP-IMG"  variant="top" src="https://cdn.shopify.com/s/files/1/0300/7296/3156/products/PL_pork-sinigang-na-bagnet-min_1024x1024.jpg?v=1648022222" />
                <Card.Header>
                <Card.Title>Bagnet Sinigang</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Feel the crispiness of Pork Bagnet with a umami flavor of one of the most In demand Soup Based in the Philippines!
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img id="BP-IMG" variant="top" src="https://i.ytimg.com/vi/_VVOY2VTYaQ/maxresdefault.jpg" />
                <Card.Header>
                    <Card.Title>Bagnet Kare Kare</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Taste the number ONE! Kare Kare Here in the Philippines, Ranked by the Food Philippines INC. as the most authentic Kare Kare all over the Philippines!
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img id="BP-IMG" variant="top" src="https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/sizzling-pork-sisig-manila/sizzling-pork-sisig-manila-main.jpg" />
                <Card.Header>
                    <Card.Title>Pork Sisig</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Pulutan?, Ulam? Any of That is truly Fit in Every Filipino's Tounge, the Spiciness is just right for your cravings!, but let me warn you, once you taste it you'll definitely be addicted to it!
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img id="BP-IMG" variant="top" src="https://robbreport.com/wp-content/uploads/2021/06/Pork_adobo_sheldon_simeon.jpg" />
                <Card.Header>
                    <Card.Title>Pork Adobo</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Filipino is equal to Adobo isn't it? Adobo are starting to recognize in the whole world, Many foreign countries are trying to cook Adobo. but guess? Nothing like the original here at FoodHub we present to you the most authentic Adobo you'll ever taste
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
        </Row>
        </div>
    );
}
