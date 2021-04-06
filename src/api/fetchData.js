import axios from "axios";

// async function fetchAggStatistics(dataType) {
//   let formatted_data = {
//     reportedHashrate: 0,
//     currentHashrate: 0,
//     activeWorkers: 0,
//   };

//   let wallets = [
//     "0x3933357c21a5858358895902605758b650e63c78",
//     "0x1ad5e3fec6c5bf6d3d3073273f0b987a428314aa",
//     "0xdfefeeb678d6bf997f9fe67b83f93cb539a8ab50",
//     "0x92b649957a1fade32c05038070ac4517fd3e1990",
//   ];

//   let wallet;
//   //TODO check for empty stats
//   for (wallet in wallets) {
//     const url = `https://api.ethermine.org/miner/${wallets[wallet]}/dashboard`;
//     let res = await axios.get(url);
//     let data = await res.data.data.currentStatistics;
//     if (data.reportedHashrate && data.currentHashrate && data.activeWorkers) {
//       formatted_data.reportedHashrate += Math.round(
//         data.reportedHashrate / 1000000,
//         2
//       );
//       formatted_data.currentHashrate += Math.round(
//         data.currentHashrate / 1000000,
//         2
//       );
//       formatted_data.activeWorkers += data.activeWorkers;
//     }
//   }
//   return formatted_data;
// }

async function fetchData(dataType, wallets) {
  let currentHashrate = [];
  let reportedHashrate = [];
  let formatted_data = [];

  const url =
    "https://api.ethermine.org/miner/3933357c21a5858358895902605758b650e63c78/dashboard";
  let res = await axios.get(url);
  let data = await res.data.data.statistics;
  let element;
  if (dataType === "hash") {
    for (element in data) {
      element = data[element];
      currentHashrate.push([
        element.time * 1000,
        Math.round(element.currentHashrate / 1000000, 2),
      ]);
      reportedHashrate.push([
        element.time * 1000,
        Math.round(element.reportedHashrate / 1000000, 2),
      ]);
    }

    formatted_data = [
      {
        data: currentHashrate,
        name: "Current Hashrate",
      },
      {
        data: reportedHashrate,
        name: "Reported Hashrate",
      },
    ];
  } else if (dataType === "workers") {
    data.forEach((element) =>
      currentHashrate.push([element.time * 1000, element.activeWorkers])
    );
    formatted_data = [
      {
        data: currentHashrate,
        name: "Active Workers",
      },
    ];
  }

  console.log("fetchData internal", formatted_data);
  return formatted_data;
}

export default fetchData;
