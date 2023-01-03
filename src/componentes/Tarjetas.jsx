import React from 'react'
import { Button, Card } from 'react-bootstrap';


const Tarjetas = ({ characters }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={characters.image} />
            <Card.Body>
                <Card.Title>{characters.name}</Card.Title>
                <Card.Text>
                    <span>Especie: {characters.species}</span> <br />
                    <span>Status: {characters.status}</span> <br />
                    <span>Genero: {characters.gender}</span> <br />
                </Card.Text>
                <Button variant="primary">+ Info</Button>
            </Card.Body>
        </Card>
    )
}

export default Tarjetas