import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import Tree from '../tree';

import './sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <Container className="b-sidebar-container">
                <Row>
                    <Col xs="auto" className="b-header-logotype">
                        <h5>
                            <Link to="/admin">Admin<span>Panel</span></Link>
                        </h5>
                    </Col>
                    <Col>
                        <Tree/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Sidebar;
