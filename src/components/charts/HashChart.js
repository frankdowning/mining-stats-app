import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import fetchData from './fetchData.js';

function HashChart(props) {
  const [chartOptions, setChartOptions] = useState({
            title: {text: props.title},
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: props.dataType=="hash" ? "MH/s" : "Active Workers"
                }
            },
  });

  function updateSeries() {
    fetchData(props.dataType).then((result) => {
      setChartOptions({ 
        series: result
      });
      console.log("chart data updated");
    });
  }

  useEffect(() => { 
      updateSeries();
  },[]);

  return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        <button onClick={updateSeries}>Update Series</button>
      </div>
    )
}

export default HashChart;