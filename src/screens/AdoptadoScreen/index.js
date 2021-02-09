import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {getDogs} from '../../mockRequests/perritos';
import NavigationBar from '../../components/Navigation/index';



export const Adoptado = ()=> {
  const mockPerritosSeleccionado = getDogs()[0];
  return (
    <div className="container-fluid">
        <NavigationBar />
        <h3 className="m-4">{`Felicidades NombreUsuario, haz adoptado NombrePerrito`}</h3>
        <div className="container">
            <div className="row">                
                    <div className="col-sm-12 mb-2">
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={mockPerritosSeleccionado.img} />
                    <Card.Body>
                      <Card.Title>{mockPerritosSeleccionado.nombre}</Card.Title>
                      <Card.Text>
                        <div>{`Genero: ${mockPerritosSeleccionado.genero}`}</div>
                        <div>{`Edad: ${mockPerritosSeleccionado.edad}`}</div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>                
            </div>
        </div>
    </div>
  )
}

export default Adoptado;