import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor:"pointer", width:"auto"}}
                    border = {brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-3 ms-2"
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;