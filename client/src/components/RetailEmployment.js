import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


// color per comp:
// bldg & garden: (204, 204, 204)
// department: (181, 208, 238)
// general merch: (247, 210, 171)
// grocery: (206,235, 165)
// healthcare: (255, 165, 67)

const RetailEmployment = (props) => {

  const data = {
    labels: ["Year ago", "Prv", "Jan/16"],
    datasets: props.datasets
  };

  return (
    <Bar
      data={data}
      width={100}
      height={100}
      options={{
        legend: {
          position: 'left'
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }}
    />
  )
}

export default RetailEmployment;