import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    };
}

Dashboard = connect(mapStateToProps)(Dashboard);

export default Dashboard;