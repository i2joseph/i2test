import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// color per comp:
// bldg & garden: (114, 114, 114)
// department: (255, 55, 82)
// drug: (239, 247, 0)
// grocery: (81, 148, 216)
// nonstore: (255, 165, 67)
// wh & super: (174, 79, 173)

const RetailSales = (props) => {
  const data = {
    labels: props.labels,
    datasets: props.data
  };

  return (
    <div>
      <h5>Retail Sales</h5>
      <Line
        data={data}
        width={100}
        height={300}
        options={{
          tooltips: {
            enabled: true
          },
          elements: {
            point: {
              radius: 2,
              hoverRadius: 2
            }
          },
          legend: {
            position: 'left'
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: props.yLabelString
              },

              ticks: {
                callback: () => {
                  return
                }
              }
            }]
          }
        }}
      />
    </div>
  );
};

export default RetailSales;