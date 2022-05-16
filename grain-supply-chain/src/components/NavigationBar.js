import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: primary;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #bbb;
    }
  }
`;

const NavigationBar = () => {
    return (
        <Styles>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Grain Supply Chain</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/farm' exact>Farm</Nav.Link>
                        <Nav.Link as={NavLink} to='/storage' exact>Storage</Nav.Link>
                        <Nav.Link as={NavLink} to='/transportation' exact>Transportation</Nav.Link>
                        <Nav.Link as={NavLink} to='/export' exact>Export</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact-us' exact>Contact us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Styles>
    );
}

export default NavigationBar