import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TNM2B from '/src/Imagenes/TNM2B.png';
import U1B from '/src/Imagenes/U1B.png';
import CS2B from '/src/Imagenes/CS2B.png';

const theme = {
    nav:{
      backgroundColor:"#1B396A"
    },
    bg: {
      backgroundColor: 'white',
    },
    logo: {
      alignContent: "center",
      weith: 70,
      height: 70
    },
    navImg:{
      alignContent: "center",
      weith: 40,
      height: 40
    },
    header: {
      color: 'black',
      fontSize: '96px',
      fontFamily: 'Montserrat'
    },
    fControl: {
      backgroundColor: "#ECECEC",
      borderColor: "black",
      fontFamily: 'Montserrat',
      fontSize: '20px',
      width: '17%',
      borderRadius: 50
    },
    fHText: {
      color: 'white',
      fontFamily: 'Montserrat',
      fontSize: '20px'
    },
    fDText: {
      color: 'white',
      fontFamily: 'Montserrat',
      fontSize: '30px'
    },
    button: {
      color: 'black',
      fontSize: '20px',
      backgroundColor: '#FFFFFF',
      borderRadius: 30
    }
  };
  
  const card = {
    backgroundColor: "blue"
  };
  
function NavBar(){
    return (
      <>
      <Navbar collapseOnSelect expand="lg" style={theme.nav}>
      <Container>
        <Navbar.Brand href="#home"><img className='mb-3' src={TNM2B} style={theme.logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solicitudes" id="collasible-nav-dropdown" style={theme.fDText}>
              <NavDropdown.Item href="#action/3.2">
                Solicitudes de mantenimiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Ordenes de trabajo de mantenimiento
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ordenes" id="collasible-nav-dropdown" style={theme.fDText}>
              <NavDropdown.Item href="#action/3.1">Pendientes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Liberadas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aprobadas</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link href="#deets" style={theme.fDText}>Perfil <img className='mb-3' src={U1B} style={theme.navImg}  /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={theme.fDText}>Salir <img className='mb-3' src={CS2B} style={theme.navImg} height="20px" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}
export default NavBar;