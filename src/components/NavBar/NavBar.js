import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import './NavBar.css';
import { CartWidget } from "./CartWidget/CartWidget";


export const NavBar = () => {

    return (
        <header>
            <Navbar className='navegacionBar' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='colorVerd'>ELEKTRONIKA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='colorVerd'>Electrodomésticos</Nav.Link>
                            <Nav.Link href="#action2" className='colorVerd'>Televisores</Nav.Link>
                            <Nav.Link href="#action3" className='colorVerd'>
                                Computadoras
                            </Nav.Link>
                            <NavDropdown title="Celulares" id="navbarScrollingDropdown" className='colorVerd'>
                                <NavDropdown.Item href="#action3" className='colorVerd'>Apple</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className='colorVerd'>
                                    Android
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" className='colorVerd'>
                                    Accesorios
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <CartWidget />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className='colorVerd'>Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}