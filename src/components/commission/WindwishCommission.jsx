import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import ProfileImg from '../../assets/Profile.png';

export default function WindwishCommission() {

    return <>
        <p>Commission Page</p>
        <Container id="CommissionPageContainer">
            <Row>
                <Col xs lg={2}>
                    <Card id="CommissionCard">
                        <Card.Img variant="top" src={ProfileImg} />
                        <Card.Title>gale</Card.Title>
                        <Card.Subtitle>fengfuru</Card.Subtitle>
                    </Card>
                </Col>
                
                <Col>
                    <Row>
                        <Col>
                            <img src="https://pbs.twimg.com/media/GE0vRu-WkAAQCoF?format=jpg&name=4096x4096" width={500} />
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Commission Type 1</Card.Title>
                                    <Card.Text>Lorem ipsum</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}