import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {

    const[alerta, setAlerta] = useState('')

    const send = (e) =>{
        e.preventDefault();

        const nombre = document.getElementById("nombre").value
        const email = document.getElementById("email").value
        const telefono = document.getElementById("telefono").value
        const mensaje = document.getElementById("mensaje").value

        if(!nombre || !email || !telefono || !mensaje){

            setAlerta('error')
            setTimeout(() => {
                setAlerta('')
            }, 2000);
        }else{
            setTimeout(() => {
                setAlerta('')
            }, 2000);
            setAlerta('enviado')
            emailjs.sendForm(process.env.REACT_APP_EMAILSERVICE, process.env.REACT_APP_EMAILTEMPLATE, e.target, process.env.REACT_APP_EMAILAPIKEY)
        }
    }

    return (<>
    {
            alerta === 'error'
            ? (<Alert variant='danger' className='ms-auto mt-5' style={{position: 'absolute', left: '2%'}}>
                Error. Debe llenar todos los campos.
            </Alert>)
            : alerta === 'enviado'
                ?
                (<Alert variant='success' className='ms-auto mt-5' style={{position: 'absolute', left: '2%'}}>
                    Mensaje enviado correctamente.
                </Alert>)
                : ''
        }
        <Form className='text-center' id='contacto' style={{paddingTop: '8rem', paddingBottom: '5rem'}} onSubmit={send}>
        
        <h3 className='pb-5' style={{color: '#FF4500'}}>Formulario de contacto</h3>
        <Form.Group>
            <Form.Label style={{color: '#FF6347'}}>Nombre completo</Form.Label>
            <Form.Control className='mb-5' type='text' placeholder='Ingrese su Nombre Completo' name='nombre' id='nombre'/>
            <Form.Label style={{color: '#FF6347'}}>Correo electrónico</Form.Label>
            <Form.Control className='mb-5' type='email' placeholder='Ingrese su correo electrónico' name='email' id='email'/>
            <Form.Label style={{color: '#FF6347'}}>Teléfono</Form.Label>
            <Form.Control className='mb-5' type='number' placeholder='Ingrese su número de teléfono' name='telefono' id='telefono'/>
            <Form.Label style={{color: '#FF6347'}}>Mensaje</Form.Label>
            <Form.Control className='mb-5' type='text' placeholder='Ingrese el mensaje que desea enviar' name='mensaje' id='mensaje'/>
            <Button type='Submit' className='mt-3 mb-5' variant='success'>Enviar</Button>
        </Form.Group>
    </Form>
    
    </>
    
  )
}

export default Contact