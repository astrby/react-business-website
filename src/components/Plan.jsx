import React from 'react'
import { Container } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Instalaciones from '../img/instalaciones.jpg'
import Nutricionista from '../img/nutricionista.jpg'
import Clases from '../img/clases.jpg'
import Casilleros from '../img/casilleros.jpg'
import Piscina from '../img/piscina.jpg'

const Plan = () => {

    const params = useParams();

  return (
    <Container fluid='ms vh-180 text-center' style={{backgroundColor: 'black', paddingTop: '8rem'}}>
            <h2 style={{color: '#FF4500'}}>Plan {params.name}</h2>
            <Row style={{paddingTop:'8rem', paddingBottom:'8rem', margin: '1rem'}} className='align-items-center'>
                <Col><p style={{color: 'white'}}>Instalaciones del más alto nivel con equipo para todo tipo de ejercicio.</p></Col>
                <Col><img src={Instalaciones} style={{width: '20rem',height:'20rem', borderRadius: '250px'}}/></Col>
            </Row>
            <Row style={{paddingTop:'2rem', paddingBottom:'8rem', margin:'1rem'}} className='align-items-center'>
                <Col><img src={Nutricionista} style={{width: '20rem',height:'20rem', borderRadius: '250px'}}/></Col>
                <Col><p style={{color: 'white'}}>Servicio completo de nutricionista, pesaje y acompañamiento de control de peso.</p></Col>
            </Row>
            <Row style={{paddingTop:'2rem', paddingBottom:'10rem', marginLeft: '1rem', marginRight:'1rem'}} className='align-items-center'>
                <Col><p style={{color: 'white'}}>Clases grupales todas las semanas de distintos ejercicios.</p></Col>
                <Col><img style={{width: '20rem',height:'20rem', borderRadius: '250px'}} src={Clases}/></Col>
            </Row>
            {
              params.name === 'Medio' || params.name === 'Avanzado'
              ?
              (<Row style={{paddingTop:'2rem', paddingBottom:'10rem', marginLeft: '1rem', marginRight:'1rem'}} className='align-items-center'>
                    <Col><img src={Casilleros} style={{width: '20rem',height:'20rem', borderRadius: '250px'}}/></Col>
                    <Col><p style={{color: 'white'}}>Servicio de casilleros para guardar equipamiento de gimnasio. Con espacio hasta de 30x30cm.</p></Col>
              </Row>)
              :''
            }
            {
              params.name === 'Avanzado'
              ?
              (<Row style={{paddingTop:'2rem', paddingBottom:'10rem', marginLeft: '1rem', marginRight:'1rem'}} className='align-items-center'>
                  <Col><p style={{color: 'white'}}>Acceso al área de natación y de piscinas.</p></Col>
                  <Col><img style={{width: '20rem',height:'20rem', borderRadius: '250px'}} src={Piscina}/></Col>
              </Row>
              ):''
            }
    </Container>
  )
}

export default Plan