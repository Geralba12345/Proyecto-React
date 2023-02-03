import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './NavBar.css';
import { CartWidget } from "./CartWidget/CartWidget";
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const NavBar = () => {

    return (
        <header>
            <Navbar bg="light" expand="lg" style={{ borderBottom:"solid", borderBottomWidth:"1px", borderBottomColor:"green" }}>
                <Container fluid>
                    <Link to="/"><img src='https://res.cloudinary.com/dmqlbztrm/image/upload/v1669773133/TheNewNow_crowdcell_shutterstock_526062973_pl77rb.jpg' alt='Logo de marca' className='logMarc'/></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/category/celulares" style={{ textDecoration: "none", margin:"10px" }}>
                                <Button variant="outline-success" href="#action1">Celulares</Button>
                            </Link>
                            <Link to="/category/computadoras" style={{ textDecoration: "none", margin:"10px" }}>
                            <Button variant="outline-success" href="#action2">Computadoras</Button>
                            </Link>
                        </Nav>
                        <CartWidget />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder=""
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}