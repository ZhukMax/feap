import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

class ErrorView extends React.Component {
    render() {
        return (
            <Container className="b-container">
                <div className="b-content-wrapper">
                    <Container className="b-content">
                        <Row>
                            <Col>
                                <h3>Произошла ошибка.</h3><br/>
                                <p>{ this.props.error }</p>
                                <p>Вернуться на <Link to='/admin'>главную</Link></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    };
}

export default ErrorView;