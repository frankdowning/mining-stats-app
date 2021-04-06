import axios from 'axios';

async function fetchSummaryData(dataType) {
    let currentHashrate = [];
    let reportedHashrate = [];
    let formatted_data = [];
    
    const url = 'https://api.ethermine.org/miner/3933357c21a5858358895902605758b650e63c78/dashboard';
    let res = await axios.get(url)
    let data = await res.data.data.currentStatistics;

    return data;
}

export default fetchSummaryData;