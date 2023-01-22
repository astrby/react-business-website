import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const NB = () => {

  const handleScroll = (element) => {
    const planes = document.getElementById("planes")
    const servicios = document.getElementById("servicios")
    const contacto = document.getElementById("contacto")

    console.log(element)

    if(element === "planes"){
      planes.scrollIntoView({behavior: 'smooth'})
    }
    

    if(element === "servicios"){
      servicios.scrollIntoView({behavior: 'smooth'})
    }

    if(element === "contacto"){
      contacto.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <Navbar bg='transparent' variant='dark' expand='sm' className='position-absolute w-100'>
        <Container>
            <Navbar.Brand style={{color: '#FF4500'}}>Gimnasio</Navbar.Brand>
            <Navbar.Toggle/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                      <Nav.Link style={{color: '#FF6347'}} href='#' onClick={()=>handleScroll("servicios")}>Servicios</Nav.Link>
                        <Nav.Link style={{color: '#FF6347'}} href='#' onClick={()=>handleScroll("planes")}>Planes</Nav.Link>
                        <Nav.Link style={{color: '#FF6347'}} href='#' onClick={()=>handleScroll("contacto")}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NB