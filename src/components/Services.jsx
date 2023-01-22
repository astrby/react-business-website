import React from 'react'
import {GiWeightLiftingUp} from 'react-icons/gi'
import {FaAppleAlt} from 'react-icons/fa'
import {MdPool} from 'react-icons/md'

const Services = () => {
    
    return (
        <div className='pt-5 pb-5'>
            <h2 style={{textAlign: 'center', color: '#FF4500'}} className='pt-5 pb-3' id='servicios'>Nuestros Servicios</h2>
            <div className='pt-5' style={{color: 'white'}}>
                <GiWeightLiftingUp style={{fontSize: '5rem'}}/>
                <p className='pt-3' style={{fontSize: '1rem'}}>Equipo de ejercicio de alto nivel</p>
            </div>
            <div className='text-center' style={{color: 'white'}}>
                <FaAppleAlt style={{fontSize: '5rem'}}/>
                <p className='pt-3' >Servicio de Nutrición</p>
            </div>
            <div className='text-end pb-5' style={{color: 'white'}}>
                <MdPool style={{fontSize: '5rem'}}/>
                <p className='pt-3'>Piscinas dentro de las instalaciones</p>
            </div>
        </div>
    )
}

export default Services