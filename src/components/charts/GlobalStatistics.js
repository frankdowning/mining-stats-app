import HashChart from './HashChart.js';
import MetricsContainer from './MetricsContainer.js';
// import fetchData from './fetchData.js';
import React, { useState, useEffect } from 'react';


const charts = [
    {
        title: "Hashrate",
        dataType: "hash"
    },
    {
        title: "Workers",
        dataType: "workers"
    }
]

function GlobalStatistics() {
    // const [data, setData] = useState();
    
    // useEffect( () => {
    //   fetchData().then( (result) => {
    //     console.log("global statistics fetch data result", result);
    //     setData(result);
    //     console.log("state data updated");
    //   })
    // },[]);
    
    
    return (
        <div>
            <MetricsContainer/>
            {charts.map(chart => (<HashChart title={chart.title} dataType={chart.dataType}/>))}
        </div>
    )
}

export default GlobalStatistics;