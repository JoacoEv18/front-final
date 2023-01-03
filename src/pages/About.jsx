import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export const About = () => {

    const [personas, setPersonas] = useState([]);

    //Api de mi DataBase
    //const URL = 'http://localhost:3001/datos'; //Variable Local

    const URL = 'https://back-final-production.up.railway.app/datos';

    //Creamos una funcion para usar el UseFace
    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);
            setPersonas(data.personas)
            console.log(data.personas);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPersonas()
    },[]);


    return (
        <div className='section m-5'>
            <h2>
                About Page
            </h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                    </tr>
                </thead>
                <tbody>
                {personas.map(persona => 
                    <tr>
                        <td>{persona._id}</td>
                        <td>{persona.nombre}</td>
                        <td>{persona.apellido}</td>
                        <td>{persona.dni}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}