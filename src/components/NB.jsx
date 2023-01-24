import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {HashLink} from 'react-router-hash-link'

const NB = () => {

  return (
    <Navbar bg='transparent' variant='dark' expand='sm' className='position-absolute w-100'>
        <Container>
            <Navbar.Brand href='/'>Gimnasio</Navbar.Brand>
            <Navbar.Toggle/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto' style={{marginRight:'1rem'}}>
                      <HashLink to={'/#servicios'} style={{textDecoration:'none', color:'grey', marginTop:'0.5rem', marginRight:'1rem'}}>Servicios</HashLink>
                      <HashLink to={'/#planes'} style={{textDecoration:'none', color:'grey', marginTop:'0.5rem', marginRight:'1rem'}}>Planes</HashLink>
                      <HashLink to={'/#contacto'} style={{textDecoration:'none', color:'grey', marginTop:'0.5rem', marginRight:'1rem'}}>Contacto</HashLink>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NB