import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <Container className="b-footer-container">
                <Row>
                    <Col>
                        <span>2017 &copy; FrontEnd Admin Panel</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
