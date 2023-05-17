import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Menu from '../Menu';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { auto, left } from '@popperjs/core';

const theme = {
  bg: {
    backgroundColor: 'white',
  },
  logo: {
    width: 450,
    height: auto
  },
  header: {
    color: 'black',
    fontSize: '50px',
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  fControl: {
    backgroundColor: "white",
    borderColor: "#807E82",
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: "#807E82",
    width: 'auto',
    borderRadius: 10,
    textAlign: "left"
  },
  fControl2: {
    backgroundColor: "white",
    borderColor: "#807E82",
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: "#807E82",
    width: '450px',
    borderRadius: 10,
    textAlign: "left"
  },
  fHText: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: 'black',
    textAlign: "center",
  },
  button: {
    color: 'white',
    fontSize: '20px',
    backgroundColor: '#1B396A',
    borderRadius: 15
  },
  button2: {
    color: '#EE7044',
    fontSize: '20px',
    backgroundColor: 'white',
    borderColor:"white",
    borderRadius: 15
  },modalBg:{
    backgroundColor: '#807E82',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: 'white',
    textAlign: "center",
  },input:{
    color: 'white',
    fontSize: '20px',
    backgroundColor: '#1B396A',
  }
};

const card = {
  backgroundColor: "yellow"
};
  
function Register() {
  const endpoint = 'http://localhost/ITAFrontEndWeb/public/api/personalData_register';
  //Form data
  const[name,setName]=useState('');
  const[lastname,setLastName]=useState('');
  const[area,setArea]=useState('');
  const[plantel,setPlantel]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[signature, setSignature] = useState('');
  
  //States
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  //handleSubmit
  const handleSubmit = (event) => {
    const form = event.preventDefault();

    console.log(name, lastname, password, area, plantel, email, signature);
    const data= new FormData();
    data.append('name', name)
    data.append('lastname', lastname)
    data.append('password',password)
    data.append('area',area)
    data.append('plantel',plantel)
    data.append('email',email)
    data.append('signature',signature)

    axios.post('http://localhost/ITAFrontEndWeb/public/api/personalData_register',data, {headers:{
      'Content-Type':'multipart/form-data', 'Accept':'application/json'
    }})

  };

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email:'',
    confirmEmail:''
    
  });
 
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email:'',
    confirmEmail:''
  })
 //Onchange
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  //validation
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Porfavor ingrese la contraseña.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Error, Las contraseñas no coinciden.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Por favor confirme la contraseña.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Error, Las contraseñas no coinciden.";
          }
          break;

          case "email":
          if (!value) {
            stateObj[name] = "Porfavor ingrese el correo.";
          } else if (input.confirmEmail && value !== input.confirmEmail) {
            stateObj["confirmEmail"] = "Error, Los correos no coinciden.";
          } else {
            stateObj["confirmEmail"] = input.confirmEmail ? "" : error.confirmEmail;
          }
          break;
 
        case "confirmEmail":
          if (!value) {
            stateObj[name] = "Porfavor ingrese el correo.";
          } else if (input.email && value !== input.email) {
            stateObj[name] = "Error, Los correos no coinciden.";
          }
          break;
 
        default:
          break;
      }
      return stateObj;
    });
  }

  return (
    <>
    <Menu/>
    <section>
    <Container fluid style={{ padding: 40, position: 'sticky', alignItems: 'center' }}>
      <Stack  align="center" className="col-md-6 mx-auto" style={{ borderColor: "#1B396A", borderWidth: 3 }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <h1 style={theme.header}>Registro de nuevo usuario</h1>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre"
              style={theme.fControl}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Apellidos"
              style={theme.fControl}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Area"
              onChange={(e) => setArea(e.target.value)}
              style={theme.fControl}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              onChange={(e) => setPlantel(e.target.value)}
              placeholder="Plantel"
              style={theme.fControl}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control
              required
              type="email"    
              name="email"
              placeholder="Correo"

              onBlur={validateInput}
              onChange={(e) => setEmail(e.target.value)}
              style={theme.fControl}
            />
            {error.email && <span className='err'>{error.email}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="email"
              name="confirmEmail"
              placeholder="Confirmacion"
              onBlur={validateInput}
              onChange={onInputChange}
              style={theme.fControl}
            />
            {error.confirmEmail && <span className='err'>{error.confirmEmail}</span>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control
              required
              type="password"
              name="password"
              placeholder='Enter Password'
             
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validateInput}
              style={theme.fControl}
            />
            {error.password && <span className='err'>{error.password}</span>}
            
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirmación"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              style={theme.fControl}
            />{error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
          </Form.Group>
        </Row>
        <Row className="m-2">
        <Stack>
            <h1 style={theme.fHText}>Firma</h1>
          </Stack>
          <Stack direction="horizontal"gap={2} className="col-md-6 mx-auto">
            <input id='fileUpload' type='file' style={theme.input} multiple accept='image/png' onChange={(e)=> setSignature(e.target.files[0])} responsive/>
          </Stack>
        </Row>
        <Stack direction="horizontal"gap={2} className="col-md-9 mx-auto">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
          <Button style={theme.button} type="submit">Enviar</Button>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <Button  align="right" style={theme.button2}>Cancelar</Button>
          </Stack>
      </Form>
      <br/>
      </Stack>
      
      </Container>
    </section>
    <Footer/>
    </>
  );
}

export default Register;