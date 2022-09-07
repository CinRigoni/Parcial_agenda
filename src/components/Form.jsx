import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { editContact, insertContact } from '../service/funciones';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const Formulario = () => {
    const {idContact} = useParams()

    const [data, setData] = useState({
        id: "",
        fotourl: "",
        apellido: "",
        nombre: "",
        telefono: "",
        email: "",
    })

    const handleChange = (name, value)=>{

        setData({
            ...data,
            [name]: value
        })

    }

    const onSubmit = (e)=>{
        e.preventDefault()


        if(idContact !== "0"){
            editContact(data).then(()=> window.location.href="/grilla")
        }else{
            insertContact({id: idContact, ...data}).then((res)=> window.location.href="/grilla")
        }
    }

    useEffect(()=>{
        if (idContact !== 0) {
            axios.get('http://168.194.207.98:8081/api_contacto/get_contactos.php')
            .then(res=>{
                res.data.map((e)=>{
                    if(e.id=== idContact){
                        setData({
                            id: e.id,
                            fotourl: e.fotourl,
                            nombre: e.nombre,
                            apellido: e.apellido,
                            telefono: e.telefono,
                            email: e.email
                        })
                    }
                })
            })
        }
    }, [])

    return (
        <Container className="mt-3">
            <Form onSubmit={(e)=> onSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control type="text" placeholder="Insertar url" name='fotourl' value={data.fotourl} onChange={(e)=> handleChange(e.target.name, e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Insertar nombre" name='nombre' value={data.nombre} onChange={(e)=> handleChange(e.target.name, e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Insertar apellido" name='apellido' value={data.apellido} onChange={(e)=> handleChange(e.target.name, e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="Insertar teléfono" name='telefono' value={data.telefono} onChange={(e)=> handleChange(e.target.name, e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Insertar email" name='email' value={data.email} onChange={(e)=> handleChange(e.target.name, e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3'>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default Formulario;