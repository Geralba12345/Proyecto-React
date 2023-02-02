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
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/"><img src='https://res.cloudinary.com/dmqlbztrm/image/upload/v1669773133/TheNewNow_crowdcell_shutterstock_526062973_pl77rb.jpg' alt='Logo de marca' className='logMarc'/></Link>
                    <Link to="/">
                    <Navbar.Brand className='colorVerd'>ELEKTRONIKA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    </Link>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link href="#action1" className='colorVerd' to="/category/celulares">Celulares</Link>
                            <Link href="#action3" className='colorVerd' to="/category/computadoras">
                                Computadoras
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