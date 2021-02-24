import { Card, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import fetchSummaryData from './fetchSummaryData.js';


const MetricsContainer = () => {
  const [reportedHashrate, setReportedHashrate] = useState(0);
  const [currentHashrate, setCurrentHashrate] = useState(0);
  const [activeWorkers, setActiveWorkers] = useState(0);
  
  useEffect(() => {
    fetchSummaryData().then((result) => {
      setReportedHashrate(Math.round(result.reportedHashrate / 1000000,2));
      setCurrentHashrate(Math.round(result.currentHashrate / 1000000,2));  
      setActiveWorkers(result.activeWorkers);  
    });
  },[]);

  return (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Reported Hashrate" style={{textAlign: 'center'}}>
          {reportedHashrate}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Current Hashrate" style={{textAlign: 'center'}}>
          {currentHashrate}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Active Wokers" style={{textAlign: 'center'}}>
          {activeWorkers}
        </Card>
      </Col>
    </Row>
  </div>
);
}

export default MetricsContainer;