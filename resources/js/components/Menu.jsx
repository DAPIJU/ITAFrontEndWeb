import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TNM2B from '/src/Images/TNM2B.png';
import U1B from '/src/Images/U1B.png';
import CS2B from '/src/Images/CS2B.png';

const theme = {
    nav:{
      backgroundColor:"#1B396A"
    },
    bg: {
      backgroundColor: 'white',
    },
    logo: {
      alignContent: "center",
      width: 70,
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
  
function Menu(){
    return (
      <>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#1B396A'}} variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img className='mb-3 mx-auto' src={TNM2B} width={200} height={80} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <NavDropdown title="Solicitudes" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="MaintenanceRequests">Solicitudes activas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Historial de solicitudes
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Órdenes" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Pendientes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Liberadas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Aprobadas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Crear nueva órden
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Perfil <img className='mb-3' src={U1B} style={theme.navImg}/></Nav.Link>
                <Nav.Link eventKey={2} href="#memes"> Cerrar sesión <img className='mb-3' src={CS2B} style={theme.navImg}/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
    );
}
export default Menu;