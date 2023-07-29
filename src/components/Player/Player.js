import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Player/Player.css'
const Player = ({ Playerr }) => {
  return (
    <Card style={{ width: '18rem' }} className='cardBox'>
      <Card.Img variant="top" src={Playerr.image} className='cardImg' />
      <Card.Body>
        <Card.Title>{Playerr.name}</Card.Title>
        <Card.Text>
          Team: {Playerr.team}
        </Card.Text>
        <Card.Text>
          nationality: {Playerr.nationality}
        </Card.Text>
        <Card.Text>
          Jersey Number: {Playerr.jerseyNumber}
        </Card.Text>
        <Card.Text>
          age: {Playerr.age}
        </Card.Text>
        <Button variant="primary">Show more</Button>
      </Card.Body>
    </Card>
  );
}

export default Player