import { Card, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import fetchSummaryData from "../../api/fetchSummaryData.js";

const MetricsContainer = (props) => {
  const [reportedHashrate, setReportedHashrate] = useState(0);
  const [currentHashrate, setCurrentHashrate] = useState(0);
  const [activeWorkers, setActiveWorkers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSummaryData(props.wallets).then((result) => {
      setReportedHashrate(result.reportedHashrate);
      setCurrentHashrate(result.currentHashrate);
      setActiveWorkers(result.activeWorkers);
      setLoading(false);
    });
  }, []);

  return (
    <div className="site-card-wrapper">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={8} xl={8}>
          <Card
            size="small"
            title="Reported Hashrate"
            style={{ textAlign: "center" }}
            loading={loading}
          >
            {reportedHashrate}
          </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
          <Card
            size="small"
            title="Current Hashrate"
            style={{ textAlign: "center" }}
            loading={loading}
          >
            {currentHashrate}
          </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
          <Card
            size="small"
            title="Active Wokers"
            style={{ textAlign: "center" }}
            loading={loading}
          >
            {activeWorkers}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MetricsContainer;
