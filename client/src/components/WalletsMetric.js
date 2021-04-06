import React, { useEffect, useState } from "react";

import MetricCard from "react-metric-card";

function WalletsMetric(props) {
  const [value, setValue] = useState(null);
  const [change, setChange] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  // const [isError, setIsError] = useState(null);

  function getData() {
    setValue("1");
    setChange("100%");
    setIsFetching(false);
  }

  useEffect(() => {
    getData();
  });

  return (
    <MetricCard
      value={value}
      trend={{
        slope: 1,
        description: "Since last week",
        value: change,
      }}
      title="WATCHED ADDRESSES"
      fetching={isFetching}
      error={null}
    />
  );
}

export default WalletsMetric;
