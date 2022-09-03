import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { deleteContact } from '../service/funciones';
import { Container } from "react-bootstrap";
import './PorIndice.css';

const PorIndice = () => {

    const {letra} = useParams();
    const [contacts, setContacts] = useState([])

    const buscaPorIndice = async(letra) => {
        try{
            const urlIndice = `http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=${letra}`
            const res = await fetch(urlIndice)
            const data = res.json()
            setContacts(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        buscaPorIndice(letra);
    })

    const eliminarContacto = (id)=>{
        setContacts(contacts.filter(contact=> contact.id !== id))
        deleteContact(id)
    }

    return(
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
            ? contacts.map((item, index) => {
                return(
                    <div key={index}>
                        <div className="grid-item"><img src={item?.fotourl}/></div>
                        <div className="grid-item">{item?.apellido}</div>
                        <div className="grid-item">{item?.nombre}</div>
                        <div className="grid-item">{item?.telefono}</div>
                        <div className="grid-item">{item?.email}</div>
                        <div className="grid-item"><button onClick={()=> eliminarContacto(item.id)}>BORRAR</button>-<button href={`/formulario/${item.id}`}>EDITAR</button></div>
                    </div>
                )
            })
            :""
            }
            </div>
            <div>
                <button href="/grilla">Volver</button>
            </div>
        </Container>
    )
}

export default PorIndice;