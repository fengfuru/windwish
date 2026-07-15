import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from '../../assets/AboutGale.png';

function WindwishAbout() {

    return <>
        <Container>
            <Row>
                <Col>
                    <img src={AboutImg} width={500} />
                </Col>
                <Col>
                    <h2>fengfuru</h2>
                    <p>they/them</p>
                    <p>Lorem ipsum text</p>
                </Col>
            </Row>
        </Container>
    </>
}

export default memo(WindwishAbout);