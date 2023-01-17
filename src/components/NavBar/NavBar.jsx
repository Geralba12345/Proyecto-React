import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './NavBar.css';
import { CartWidget } from "./CartWidget/CartWidget";
import {Link} from "react-router-dom"


export const NavBar = () => {

    return (
        <header>
            <Navbar className='navegacionBar' bg="light" expand="lg">
                <Container fluid>
                    <Link to="/"><img src='https://res.cloudinary.com/dmqlbztrm/image/upload/v1669773133/TheNewNow_crowdcell_shutterstock_526062973_pl77rb.jpg' alt='Logo de marca' className='logMarc'/></Link>
                    <Link className='colorVerd' to="/">ELEKTRONIKA</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}