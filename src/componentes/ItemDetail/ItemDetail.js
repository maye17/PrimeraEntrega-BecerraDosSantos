
import * as React from 'react'  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const itemDetail = ({data})=> {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src= {data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
          {data.price}
        </Card.Text>
        <Card.Text>
          {data.price_sign}
        </Card.Text>
        <Button variant="primary">Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default itemDetail;