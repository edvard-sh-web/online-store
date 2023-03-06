import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:"white", textDecoration:"none"}} to={SHOP_ROUTE}>Online Store</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto">
                    <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)} >Admin Panel</Button>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className="ms-2">Log out</Button>
                </Nav>
                :
                <Nav className="ms-auto">
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                </Nav>
            }
            </Container>
                </Navbar>
    );
});

export default NavBar;