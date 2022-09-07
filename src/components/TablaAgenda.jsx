import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteContact } from "../service/funciones";
import { Container } from "react-bootstrap";
import "./TablaAgenda.css";

const TablaAgenda = () => {
  const [contacts, setContacts] = useState([]);

  const eliminarContacto = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    deleteContact(id);
  };

  useEffect(() => {
    axios
      .get("http://168.194.207.98:8081/api_contacto/get_contactos.php")
      .then((res) => {
        setContacts(res.data);
      });
  }, []);

  return (
    <Container id="agenda-espaciado">
      <h1>Agenda de Contactos</h1>
      <div className="grid-agenda">
        <div className="grid-item-titulos">Foto</div>
        <div className="grid-item-titulos">Apellido</div>
        <div className="grid-item-titulos">Nombre</div>
        <div className="grid-item-titulos">Telefono</div>
        <div className="grid-item-titulos">Email</div>
        <div className="grid-item-titulos">Acciones</div>

        <div className="grid-interno" id="grid-foto">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">
                      <img src={contact?.fotourl} />
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="grid-interno">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">{contact?.apellido}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="grid-interno">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">{contact?.nombre}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="grid-interno">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">{contact?.telefono}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="grid-interno">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">{contact?.email}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="grid-interno">
          {contacts !== undefined
            ? contacts.map((contact, index) => {
                return (
                  <div key={index}>
                    <div className="grid-item-b">
                    <button onClick={() => eliminarContacto(contact.id)}>
                      BORRAR
                    </button>
                    -<button href={`/formulario/${contact.id}`}>EDITAR</button>
                  </div>
                  </div>
                );
              })
            : ""}
        </div>
        
      </div>

      <h3>Búsqueda por Indice</h3>
      <div className="grid-container">
        <div className="grid-item">
          <a href={`/indice/${"A"}`}>A</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"B"}`}>B</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"C"}`}>C</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"D"}`}>D</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"E"}`}>E</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"F"}`}>F</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"G"}`}>G</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"H"}`}>H</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"I"}`}>I</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"J"}`}>J</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"K"}`}>K</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"L"}`}>L</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"M"}`}>M</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"N"}`}>N</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"Ñ"}`}>Ñ</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"O"}`}>O</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"P"}`}>P</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"Q"}`}>Q</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"R"}`}>R</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"S"}`}>S</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"T"}`}>T</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"U"}`}>U</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"V"}`}>V</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"W"}`}>W</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"X"}`}>X</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"Y"}`}>Y</a>
        </div>
        <div className="grid-item">
          <a href={`/indice/${"Z"}`}>Z</a>
        </div>
      </div>
    </Container>
  );
};

export default TablaAgenda;
