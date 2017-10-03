import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

class NotFound extends React.Component {
    render() {
        return (
            <Container className="b-container">
                <div className="b-content-wrapper">
                    <Container className="b-content">
                        <Row>
                            <Col>
                                <h3>Страница не найдена.</h3><br/>
                                Вернуться на <Link to='/admin'>главную</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    };
}

export default NotFound;