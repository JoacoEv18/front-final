import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const Formulario = () => {

    //api de la DataBase
    //const URL = 'http://localhost:3001/crear';//Variable Local

    const URL = 'https://back-final-production.up.railway.app/crear';

    //Inicializamos variables vacías para el useState
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })

    //funcion para setear las variables
    const handleChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    //Funcion del post
    const handleClick = async () => {
        await axios.post(URL, inputs) // Enviamos Datos
        setInputs({ //Vaciamos Inputs
            nombre: "",
            apellido: "",
            dni: ""
        })
    }

    return (
        <div className='section m-5'>
            <h2>
                Formulario Page
            </h2>

            <Form>
            {Object.keys(inputs).map((key, index)=>(
                <Form.Group className="mb-3" key={index}>
                    <Form.Label id='form'>
                        {key}
                    </Form.Label>
                    <Form.Control
                        name={key}
                        value={inputs[key]}
                        onChange={handleChange}
                    />
                </Form.Group>
            ))}


                <div className='text-center w-100'>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Enviar Datos
                </Button>
                </div>
            </Form>

        </div>
    )
}