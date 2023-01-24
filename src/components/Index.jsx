import React from 'react'
import Container from 'react-bootstrap/Container'
import Bg from '../img/bg.jpg'
import Image from 'react-bootstrap/Image'
import Services from './Services'
import Plans from './Plans'
import Contact from './Contact'
import './css/Index.css'

const Index = () => {

  return (
    <Container fluid='ms' style={{backgroundColor: 'black'}}>
      <Image bg='dark'  src={Bg} className='bgImage img-fluid pt-5'/>
        <Container>
          <Services/>
          <Plans/>
          <Contact/>
        </Container>
    </Container>
  )
}

export default Index