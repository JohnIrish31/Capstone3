import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function ModalProductEdit(){



    return(
        <>
            <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header className="bg-secondary">
        <Modal.Title className="text-light" id="contained-modal-title-vcenter">
        Edit Product Details
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form className="w-50">
            <Form.Group className="mb-3" controlId="descId">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    className="w-100"
                    as="textarea"
                    rows={3}
                    type="text"
                    value=""
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stocksId">
                <Form.Label>Stocks</Form.Label>
                <Form.Control
                    type="number"
                    value=""
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="priceId">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    value=""
                    required
                />
            </Form.Group>

            </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button className="btn-primary w-25" onClick={ModalProductEdit.onHide}>Update</Button>
    <Button className="btn-danger w-25" onClick={ModalProductEdit.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
        </>
    )
}