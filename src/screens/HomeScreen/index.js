import React from 'react';
import {Navbar, Nav, Card, Button} from 'react-bootstrap';
import './home.css';
import {getDogs} from '../../mockRequests/perritos';
import NavigationBar from '../../components/Navigation/index';



export const Home = ()=> (
    <div className="container-fluid">
        <NavigationBar />
        <h3 className="m-4">Adopta el cachorro que siempre has querido</h3>
        <div className="container">
            <div className="row">
                {getDogs().map(dog => (
                    <div className="col-sm-12 col-md-4 mb-2">
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={dog.img} />
                    <Card.Body>
                      <Card.Title>{dog.nombre}</Card.Title>
                      <Card.Text>
                        <div>{`Genero: ${dog.genero}`}</div>
                        <div>{`Edad: ${dog.edad}`}</div>
                      </Card.Text>
                      <Button variant="success">Adoptar!</Button>
                    </Card.Body>
                  </Card>
                  </div>
                ))}
            </div>
        </div>
    </div>
)

export default Home;