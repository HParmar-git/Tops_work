import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal'; 
import RegisterForm from './RegistrationForm'; 
import RestaurantMenu from './RestaurantMenu';
import OrderSummary from './FeeEngineForFoodDelivery';

function NavScrollExample() {
    // 1. Separate state for the Registration modal
    const [showRegister, setShowRegister] = useState(false);
    const handleRegisterClose = () => setShowRegister(false);
    const handleRegisterShow = () => setShowRegister(true);

    // 2. Separate state for the Restaurant Menu modal
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClose = () => setShowMenu(false);
    const handleMenuShow = () => setShowMenu(true); 

    // 3. FIXED: Created a unique, dedicated state for the Delivery Fee Engine modal
    const [showFeeEngine, setShowFeeEngine] = useState(false);
    const handleFeeEngineClose = () => setShowFeeEngine(false);
    const handleFeeEngineShow = () => setShowFeeEngine(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            
                            {/* Triggers the Restaurant Menu */}
                            <Nav.Link onClick={handleMenuShow}>RestaurantMenu</Nav.Link> 

                            {/* FIXED: Triggers the Delivery Fee Engine with its new label */}
                            <Nav.Link onClick={handleFeeEngineShow}>Delivery Fee Calculator</Nav.Link> 
                            
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                
                                {/* Triggers only the Register Form */}
                                <NavDropdown.Item onClick={handleRegisterShow}>
                                    Register
                                </NavDropdown.Item> 

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* MODAL 1: Account Registration */}
            <Modal show={showRegister} onHide={handleRegisterClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Account Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterForm /> 
                </Modal.Body>
            </Modal>

            {/* MODAL 2: Restaurant Menu */}
            <Modal show={showMenu} onHide={handleMenuClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Browse Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RestaurantMenu />
                </Modal.Body>
            </Modal>

            {/* MODAL 3: FIXED: Bound to the correct showFeeEngine state parameters */}
            <Modal show={showFeeEngine} onHide={handleFeeEngineClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Delivery Fee Engine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OrderSummary />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavScrollExample;
