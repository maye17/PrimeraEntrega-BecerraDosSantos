import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */
import './style.css';
import logo from '../assets/maiVisage.jpg';
import CardWiddget  from '../cartWidget/index.js';


const NavBar = () => {
    return ( 
      <div>
       <header>
       <Navbar className='header' bg="light" expand="lg">
      <Container fluid>
        <LinkContainer  to='/PrimeraEntrega-BecerraDosSantos'>
        <Navbar.Brand className="header__content-logo" href="#">
          <img src={logo}/>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/PrimeraEntrega-BecerraDosSantos'>
              <Nav.Link className='header__text Link'>Inicio</Nav.Link>
            </LinkContainer> 
            <LinkContainer to='/Curso'>
              <Nav.Link className='header__text Link'to='/Curso'>Cursos</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Servicios" id="navbarScrollingDropdown">
            <LinkContainer  to='/SocialMakeup'>
              <NavDropdown.Item href="#action3">Maquillaje Social</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/BridesMakeup'>
              <NavDropdown.Item href="#action4">
                Maquillaje de Novias
              </NavDropdown.Item>
            </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to='./PhotographyMakeup'>
              <NavDropdown.Item href="#action5">
                Maquillaje Fotográfico
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> */}
            <LinkContainer to='/Servicios'> 
              <Nav.Link className='header__text Link'to='/Servicios'>
                Servicios
              </Nav.Link>
            </LinkContainer>
            <LinkContainer  to='/Contact'>
              <Nav.Link className='header__text Link' to='/Contact'>
                Contactanos
              </Nav.Link>
            </LinkContainer>
          </Nav>
      <br />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='header__text' variant="outline-success">Search</Button>
          </Form>
          <CardWiddget></CardWiddget>
          <p className='CartWidget__info'>5</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </div>
     );
}



export default NavBar;