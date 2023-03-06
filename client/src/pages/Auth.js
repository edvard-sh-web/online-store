import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom"

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: "600px"}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter email"/>
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter password"/>
                    <Form className="d-flex justify-content-between mt-3">
                        {isLogin
                            ? <div style={{width: "auto"}}>
                                Don't have an account?
                                <NavLink
                                    to={REGISTRATION_ROUTE} className="ms-1" style={{textDecoration: "none"}}>
                                    Register!</NavLink>
                                </div>
                            : <div>
                                Already have an account?
                                <NavLink
                                    to={LOGIN_ROUTE} className="ms-1" style={{textDecoration: "none"}}>
                                    Log in!</NavLink>
                            </div>}
                        <Button
                            variant="outline-success"
                            style={{width: "auto"}}>
                            {isLogin ? "Log in" : "Sign up"}
                        </Button>

                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;