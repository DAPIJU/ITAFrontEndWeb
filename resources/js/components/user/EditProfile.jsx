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
import axios from 'axios';
import { auto, left } from '@popperjs/core';
import { MDBContainer } from 'mdb-react-ui-kit';
import { useEffect } from 'react';

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
    borderColor: "white",
    borderRadius: 15
  }, input: {
    color: 'white',
    fontSize: '20px',
    backgroundColor: '#1B396A',
  }
};

const card = {
  backgroundColor: "yellow"
};

const EditProfile = () => {
  const [personalData, setPersonalData] = useState({
    name: '',
    lastname: '',
    area: '',
    signature: '',
    plantel: ''
  });

  const [user, setUser] = useState({
    email: '',
    password: '',
    personaldata_id: '',
    role: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      personalData,
      user
    };
    axios.put(`http://localhost/ITAFrontEndWeb/public/api/personaldata_update/`, requestData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    
  };

  return (
    <>
      <Menu />
      <section>
        <Container fluid style={{ padding: 40, position: 'sticky', alignItems: 'center' }} breakpoint="xxl">
          <Stack fluid align="center" className="col-md-6 mx-auto" style={{ borderColor: "#1B396A", borderWidth: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <h1 style={theme.header}>Editar Usuario</h1>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" fluid>
                  <h1 style={theme.fHText}>Nombre</h1>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="name"
                    value={personalData.name}
                    onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" >
                  <h1 style={theme.fHText}>Apellidos</h1>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={personalData.lastname}
                    onChange={(e) => setPersonalData({ ...personalData, lastname: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <h1 style={theme.fHText}>Area</h1>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="area"
                    value={personalData.area}
                    onChange={(e) => setPersonalData({ ...personalData, area: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <h1 style={theme.fHText}>Plantel</h1>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="plantel"
                    value={personalData.plantel}
                    onChange={(e) => setPersonalData({ ...personalData, plantel: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <h1 style={theme.fHText}>Correo</h1>
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" >
                  <h1 style={theme.fHText}>Rol</h1>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="role"
                    value={user.role}
                    placeholder={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="m-2">
                <Stack>
                  <h1 style={theme.fHText}>Actualizar Firma</h1>
                </Stack>
                <Stack direction="horizontal" gap={2} className="col-md-6 mx-auto">
                  <input id='fileUpload' type='file' style={theme.input} multiple accept='image/png' onChange={(e)=> setSignature(e.target.files[0])}/>
                </Stack>
              </Row>
              <Row>
                <Stack direction="horizontal" gap={5} className="d-flex justify-content-center">

                  <Button type="submit" style={theme.button}>Guardar</Button>

                  <Button type="submit" align="right" style={theme.button2}>Cancelar</Button>

                </Stack>
              </Row>
            </Form>
            <br />
          </Stack>

        </Container>
      </section>
      <Footer />
    </>
  );
}

export default EditProfile;