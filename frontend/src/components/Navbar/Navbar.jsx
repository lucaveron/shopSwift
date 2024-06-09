import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Dropdown,
  NavbarText,
} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/images/pricetags.svg";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
 

const NavbarShopSwift = () => {
  return (  
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
      <Row className="w-100 align-items-center justify-content-center ">
          <Col md={4} xs={10}> 
            <Navbar.Brand className="div-logo" href="#home">
              <Logo className="logo-icon" />
              <NavbarText className="text-white imprima-regular">Shop Swift</NavbarText>
            </Navbar.Brand>
          </Col>
          <Col md={1} xs={2}> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>
          <Col md={7} xs={12}>
            <div className="botonera">
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-center">
                <Nav className="me-auto">
                  <Nav.Link href="#features">
                    <Button className="nav-button btn btn-light py-2 px-3">
                      Inicio
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="#features">
                    <Button className="nav-button btn btn-light py-2 px-3">
                      Nosotros
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="#features">
                    <Button className="nav-button btn btn-light py-2 px-3">
                      Contacto
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="nav-button btn btn-light py-2 px-3"
                        id="dropdown-basic">
                        Categorías
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#action/3.1">
                          Elecronicos
                        </Dropdown.Item>
                        <Dropdown.Item href="#action/3.2">
                          Laptops
                        </Dropdown.Item>
                        <Dropdown.Item href="#action/3.3">
                          Educación
                        </Dropdown.Item>
                        <Dropdown.Item href="#action/3.4">Ropa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#features">
                    <Button className="nav-button btn btn-dark  py-2 px-3">
                      Perfil
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavbarShopSwift;
