import axios from 'axios';

async function fetchData(dataType) {
    let currentHashrate = [];
    let reportedHashrate = [];
    let formatted_data = [];
    
    const url = 'https://api.ethermine.org/miner/3933357c21a5858358895902605758b650e63c78/dashboard';
    let res = await axios.get(url)
    let data = await res.data.data.statistics;
    
    if (dataType=="hash") {
    data.forEach(element => 
        currentHashrate.push(
            [
              element.time * 1000,
              Math.round(element.currentHashrate / 1000000,2),
            ]
        )
    );
    data.forEach(element => 
        reportedHashrate.push(
            [
              element.time * 1000,
              Math.round(element.reportedHashrate / 1000000,2),
            ]
        )
    );
    formatted_data = [
      {
        data: currentHashrate,
        name: "Current Hashrate"
      },
      {
        data: reportedHashrate,
        name: "Reported Hashrate"
      }
    ];
    } else if (dataType == 'workers') {
      data.forEach(element => 
        currentHashrate.push(
            [
              element.time * 1000,
              element.activeWorkers,
            ]
        )
    );
    formatted_data = [
      {
        data: currentHashrate,
        name: "Active Workers"
      }
    ];
    }
    
    console.log("fetchData internal", formatted_data);
    return formatted_data;
}

export default fetchData;