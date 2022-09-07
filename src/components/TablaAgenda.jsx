import React, { useEffect, useState } from 'react';
import './TablaAgenda.css'
import axios from 'axios'
import { deleteContact } from '../service/funciones';
import { Container } from 'react-bootstrap';

const TablaAgenda = () => {
    const [contacts, setContacts] = useState([])

    const eliminarContacto = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
        deleteContact(id)
    }

    useEffect(() => {
        axios.get('http://168.194.207.98:8081/api_contacto/get_contactos.php')
            .then(res => {
                setContacts(res.data)
            })
    }, [])



    return (
        <Container>
            <h1>Agenda de Contactos</h1>
            <div className="grid-container-agenda">
                <div className="grid-item-agenda">Foto</div>
                <div className="grid-item-agenda">Apellido</div>
                <div className="grid-item-agenda">Nombre</div>
                <div className="grid-item-agenda">Telefono</div>
                <div className="grid-item-agenda">Email</div>
                <div className="grid-item-agenda">Acciones</div>

                {contacts !== undefined
                    ? contacts.map((contact, index) => {
                        return (
                            <div key={index}>
                                <div className="grid-item"><img src={contact?.fotourl} /></div>
                                <div className="grid-item">{contact?.apellido}</div>
                                <div className="grid-item">{contact?.nombre}</div>
                                <div className="grid-item">{contact?.telefono}</div>
                                <div className="grid-item">{contact?.email}</div>
                                <div className="grid-item"><button onClick={() => eliminarContacto(contact.id)}>BORRAR</button>-<button href={`/formulario/${contact.id}`}>EDITAR</button></div>
                            </div>
                        )
                    })
                    : ""
                }
            </div>
            <h3>Busqueda por Indice</h3>
            <div className="grid-container">
                <div className="grid-item"><a href={`/indice/${"A"}`}>A</a></div>
                <div className="grid-item"><a href={`/indice/${"B"}`}>B</a></div>
                <div className="grid-item"><a href={`/indice/${"C"}`}>C</a></div>
                <div className="grid-item"><a href={`/indice/${"D"}`}>D</a></div>
                <div className="grid-item"><a href={`/indice/${"E"}`}>E</a></div>
                <div className="grid-item"><a href={`/indice/${"F"}`}>F</a></div>
                <div className="grid-item"><a href={`/indice/${"G"}`}>G</a></div>
                <div className="grid-item"><a href={`/indice/${"H"}`}>H</a></div>
                <div className="grid-item"><a href={`/indice/${"I"}`}>I</a></div>
                <div className="grid-item"><a href={`/indice/${"J"}`}>J</a></div>
                <div className="grid-item"><a href={`/indice/${"K"}`}>K</a></div>
                <div className="grid-item"><a href={`/indice/${"L"}`}>L</a></div>
                <div className="grid-item"><a href={`/indice/${"M"}`}>M</a></div>
                <div className="grid-item"><a href={`/indice/${"N"}`}>N</a></div>
                <div className="grid-item"><a href={`/indice/${"Ñ"}`}>Ñ</a></div>
                <div className="grid-item"><a href={`/indice/${"O"}`}>O</a></div>
                <div className="grid-item"><a href={`/indice/${"P"}`}>P</a></div>
                <div className="grid-item"><a href={`/indice/${"Q"}`}>Q</a></div>
                <div className="grid-item"><a href={`/indice/${"R"}`}>R</a></div>
                <div className="grid-item"><a href={`/indice/${"S"}`}>S</a></div>
                <div className="grid-item"><a href={`/indice/${"T"}`}>T</a></div>
                <div className="grid-item"><a href={`/indice/${"U"}`}>U</a></div>
                <div className="grid-item"><a href={`/indice/${"V"}`}>V</a></div>
                <div className="grid-item"><a href={`/indice/${"W"}`}>W</a></div>
                <div className="grid-item"><a href={`/indice/${"X"}`}>X</a></div>
                <div className="grid-item"><a href={`/indice/${"Y"}`}>Y</a></div>
                <div className="grid-item"><a href={`/indice/${"Z"}`}>Z</a></div>
            </div>
        </Container>
    );
};

export default TablaAgenda;