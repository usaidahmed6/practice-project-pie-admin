import React from 'react';
import pie_logo from './images/logo-pieinthesky.png'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';


const Navebar = ({ children }) => {

    return (
        <>

            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-light'>
                        <h5 className='my-2'>
                            Pie In The Sky
                        </h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className='text-light'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="sidebar">
                <Link to='/' className='link-mobile '> Home </Link>
                <Link to='/Add_Items' className='link-mobile'> Add Items</Link>
                <Link to="/New_Orders" className='link-mobile'> New Orders </Link>
            </div>
            <div className="content scrollbar" id="style-2">

              
                {children}

            </div>




        </>
    )
}

export default Navebar
