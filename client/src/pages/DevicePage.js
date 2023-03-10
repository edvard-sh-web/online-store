import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.jpg"
const DevicePage = () => {
    const device = {
            "id": 1,
            "name": "iPhone 13",
            "price": 50000,
            "rating": 5,
            "img": "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/pass/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg",
            "typeId": 2,
            "brandId": 2
        }
    const description = [
        {id:1, title: "RAM", description: "4 GB"},
        {id:1, title: "RAM", description: "4 GB"},
        {id:1, title: "RAM", description: "4 GB"},
        {id:1, title: "RAM", description: "4 GB"},
        {id:1, title: "RAM", description: "4 GB"},
    ]

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}></Image>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background:`url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>

                <Col md={4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width:300, height:300, fontSize:32, border:"5px solid lightgray"}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Add to Cart</Button>
                    </Card>
                </Col>

            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specifications</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;