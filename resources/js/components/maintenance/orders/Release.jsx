import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import IconEarringsUser from '/src/IconsOrders/IconEarringsUser.png';
import IconReleasedUser from '/src/IconsOrders/IconReleasedUser.png';
import IconApprovedUser from '/src/IconsOrders/IconApprovedUser.png';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Release = () => {

    const [releases, setReleases] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [workOrders, setWorkOrders] = useState([]);
    const location = useLocation();
    const [token, useToken] = useState('user-info');

    useEffect(() => {
            getAllReleases();
    },[])

    const getAllReleases = async () => {
        const response = await axios.get('http://localhost/ITAFrontEndWeb/public/api/workorder_showRelease',
        { //acceder con el token
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
              'Authorization':`Bearer ${localStorage.getItem('user-info')}`
            }
          });
        setReleases(response.data);
        console.log(response.data);
    }
    const deleteReleases = async (id) => {
        await axios.post(`${ruta}/workorder_destroy/${id}`, {});
        getAllReleases();
    }

    useEffect(() => {
        fetchWorkOrders();
      }, []);

      const fetchWorkOrders = async () => {
        try {
          const response = await axios.get('http://localhost/ITAFrontEndWeb/public/api/workorders');
          setWorkOrders(response.data);
        } catch (error) {
          console.error('Error fetching work orders:', error);
        }
      };

      const handleApproval = async (id) => {
        try {
          const response = await axios.patch(`/api/workorders/${id}`, { approved: 1 });
          setWorkOrders(prevWorkOrders =>
            prevWorkOrders.map(order =>
              order.id === workOrderId ? { ...order, approved: response.data.approved } : order
            )
          );
        } catch (error) {
          console.error('Error updating work order:', error);
        }
      };

      
    const filteredReleases = releases.filter((release) => {
        if (searchTerm === "") {
            return release;
        } else if (
            release.maintenanceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            release.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            release.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            release.jobDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
            release.status.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return release;
        }
    });
   if (releases) {
    return (
        <>
            <Nav>
                <Nav.Item>
                    <Stack direction='horizontal' align="center" style={{ padding: "3%" }} className="mx-auto">

                        <Row>
                            <Col md={4}>
                                <Nav.Link href='earring'>
                                    <img className='col-mb-3 mx-auto' src={IconEarringsUser} width={280} height={90} />
                                </Nav.Link>
                            </Col>
                            <Col md={4}>
                                <Nav.Link href='release'>
                                    <img className='col-mb-3 mx-auto' src={IconReleasedUser} width={280} height={90} />
                                </Nav.Link>
                            </Col>
                            <Col md={4}>
                                <Nav.Link href='approved'>
                                    <img className='col-mb-3 mx-auto' src={IconApprovedUser} width={280} height={90} />
                                </Nav.Link>
                            </Col>
                        </Row>

                    </Stack>
                </Nav.Item>
            </Nav>

            <input
                type="text"
                placeholder="Buscar..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />

            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo de mantenimiento</th>
                        <th>Tipo de servicio</th>
                        <th>Nombre del empleado</th>
                        <th>Fecha de mantenimiento</th>
                        <th>Descripción del trabajo</th>
                        <th>Evidencia 1</th>
                        <th>Evidencia 2</th>
                        <th>Evidencia 3</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReleases.map((release) => (
                        <tr key={release.id}>
                            <td> {release.id} </td>
                            <td> {release.maintenanceType} </td>
                            <td> {release.serviceType} </td>
                            <td> {release.employeeName} </td>
                            <td> {release.maintenanceDate} </td>
                            <td> {release.jobDescription} </td>
                            <td> <img src={release.evidence1} alt="signature" width={100} height={100} /> </td>
                            <td> <img src={release.evidence2} alt="signature" width={100} height={100} /> </td>
                            <td> <img src={release.evidence3} alt="signature" width={100} height={100} /> </td>
                            <td> {release.status} </td>
                            <td> <button  onClick={() => handleApproval(workOrder.id)}>
                                Aprobar
                            </button>
                                <button
                                    onClick={() => deleteReleases(release.id)}
                                    className="btn btn-danger"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
};

export default Release;