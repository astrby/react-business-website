import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/Plans.css'

const Plans = () => {

    return(
        <>
            <h2 style={{textAlign: 'center', color: '#FF4500'}} className='pt-5' id='planes'>Planes</h2>
            <div className='d-flex justify-content-center'>
                <Row className='pt-5 pb-5 text-center'>
                <Col className='d-flex justify-content-center mb-3'>
                    <a className='cardA' href='/plan/Basico' style={{textDecoration: 'none', color: 'black'}}>
                        <Card style={{height: '31rem', minWidth:'15rem', maxWidth:'15rem', borderStyle:'solid',borderWidth:'5px', borderColor: '#3c3c3c' }}>
                        <Card.Body>
                            <Card.Title className='mt-4 mb-5 text-center'>Plan Básico</Card.Title>
                            <div>
                                <ul style={{listStyleType: 'none', marginLeft:'-0.75rem', marginRight: '1rem'}}>
                                    <li className='mb-3'>Uso de instalaciones</li>
                                    <li className='mb-3'>Servicio de nutricionista</li>
                                    <li className='mb-3'>1 clase grupal por semana</li>
                                </ul>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <h3 className='pt-1 text-center'>30$</h3>
                        </Card.Footer>
                        </Card>
                    </a>
                </Col>
                <Col className='d-flex justify-content-center mb-3'>
                    <a className='cardA' href='/plan/Medio' style={{textDecoration: 'none', color: 'black'}}>
                        <Card style={{height: '31rem', minWidth:'15rem', maxWidth:'15rem', borderStyle:'solid',borderWidth:'5px', borderColor: '#3c3c3c' }}>
                            <Card.Body>
                                <Card.Title className='mt-4 mb-5 text-center'>Plan Medio</Card.Title>
                                <div>
                                <ul style={{listStyleType: 'none', marginLeft:'-0.75rem', marginRight: '1rem'}}>
                                    <li className='mb-3'>Uso de instalaciones</li>
                                    <li className='mb-3'>Servicio de nutricionista</li>
                                    <li className='mb-3'>3 clases grupales por semana</li>
                                    <li className='mb-3'>Uso de casilleros</li>
                                </ul>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <h3 className='mt-1 text-center'>35$</h3>
                            </Card.Footer>
                        </Card>
                    </a>
                </Col>
                <Col className='d-flex justify-content-center mb-3'>
                    <a className='cardA' href='/plan/Avanzado' style={{textDecoration: 'none', color: 'black'}}>
                        <Card style={{height: '31rem', minWidth:'15rem', maxWidth:'15rem', borderStyle:'solid', borderRadius:'10px', borderWidth:'5px', borderColor: '#3c3c3c'}}>
                        <Card.Body>
                            <Card.Title className='mt-4 mb-5 text-center'>Plan Avanzado</Card.Title>
                            <div>
                            <ul style={{listStyleType: 'none', marginLeft:'-0.75rem', marginRight: '1rem'}}>
                                <li className='mb-3'>Uso de instalaciones</li>
                                <li className='mb-3'>Servicio de nutricionista</li>
                                <li className='mb-3'>5 clases grupales por semana</li>
                                <li className='mb-3'>Uso de casilleros</li>
                                <li className='mb-3'>Acceso a zona de piscinas</li>
                            </ul>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <h3 className=' mt-1 text-center'>40$</h3>
                        </Card.Footer>
                        </Card>
                    </a>
                </Col>
                </Row>
            </div>
        </>
    )
}

export default Plans