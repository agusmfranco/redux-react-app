import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';


export const Login = ()=> (
    <div className="login__container">
        <div className="col-sm-12 col-md-6 login__card-form">
            <h3>Bienvenido a Redux Puppies</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar usuario" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    </div>
)

export default Login;