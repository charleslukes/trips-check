import React from 'react';
import NavBar from './common/nav';
import List from './common/tables';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.css';
import BarChart from './common/BarChart';
import PieChart from './common/PieChart';
import PieChart2 from './common/PieChart2';

function DashBoard() {
  return (
    <div className="dash">
      <NavBar />
      <Container className="chart-view">
        <Row>
          <Col xs="4">
            <PieChart />
          </Col>
          <Col xs="6">
            <BarChart />
          </Col>
          <Col xs="3">
            <PieChart2 />
          </Col>
        </Row>
      </Container>
      <div className="chart">
        <List />
      </div>
    </div>
  );
}

export default DashBoard;
