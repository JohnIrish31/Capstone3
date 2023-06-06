import { Row, Col, Card } from "react-bootstrap";

export default function HotDeals(){

	return(
		<Row className="my-3">
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                    <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>FREE DELIVERY</h2>
                        </Card.Title>
                    </Card.Header>
                        <Card.Text>

                           Purchase of Min. orders of 3000 our incredible free delivery promotion, designed with your convenience in mind! We are thrilled to offer you the opportunity to have your purchases delivered right to your doorstep without any additional shipping charges. Sit back, relax, and let us take care of the logistics while you enjoy the hassle-free shopping experience you deserve.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                    <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>SPECIAL OFFER</h2>
                        </Card.Title>
                        </Card.Header>
                        <Card.Text>
                            Introducing an irresistible offer exclusively for you, our valued customer! At FoodHUb, we're thrilled to present you with an extraordinary opportunity to enjoy a jaw-dropping 15% discount on a curated selection of items when you purchase one of our best products. Get ready to indulge in a shopping experience that combines excellence, luxury, and unbeatable savings.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                        <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>BIRTHDAY TREAT!</h2>
                        </Card.Title>
                        </Card.Header>
                        <Card.Text>
                            Birthdays are meant to be celebrated, and what better way to add sweetness to your day than with a delicious cake lovingly prepared by our talented team? When you choose to commemorate your special occasion by ordering from FoodHUb, we want to make it extra memorable by indulging you with a complimentary, freshly baked cake, made with the finest ingredients and crafted with care.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
	)
}