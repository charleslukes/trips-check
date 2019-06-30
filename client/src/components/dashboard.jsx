import React from 'react';
import List from './common/tables';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.css';
import BarChart from './common/BarChart';
import PieChart from './common/PieChart';
import PieChart2 from './common/PieChart2';

function DashBoard() {
  return (
    <div className="dash">
      <Container className="chart-view">
        <Row>
          <Col xs="4">
            <PieChart />
          </Col>
          <Col xs="4">
            <PieChart2 />
          </Col>
          <Col xs="4">
            <BarChart />
          </Col>
        </Row>
        <span className="chart-info">Daily Chart Info</span>
        <div className="chart">
          <List />
        </div>
      </Container>
    </div>
  );
}

export default DashBoard;
