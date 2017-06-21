import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './filemanager.css';

class Filemanager extends React.Component {
    render() {
        return (
            <Container className="b-container">
                <div className="b-content-wrapper">
                    <Container className="b-content">
                        <Row>
                            <Col>
                                <h3>Filemanager</h3><br/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    };
}

export default Filemanager;
