import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/ratingStar.png"
import { useNavigate } from "react-router-dom";
import {DEVICE_PAGE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-3">
            <Card
                style={{width:150, cursor:'pointer'}}
                border={"light"}
                onClick={() =>{navigate(DEVICE_PAGE_ROUTE + '/' + device.id)}}
            >
                <Image width={150} height={150} src={device.img}></Image>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung</div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}></Image>
                    </div>
                </div>
                <div>{device.name}</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;