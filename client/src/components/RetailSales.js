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
  // console.log(props.data);
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'test',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'blue',
        borderColor: 'blue',
        data: props.data
      }
    ]
  };

  return (
    <div>
          <Line
            data={data}
            width={100}
            height={500}
            options={{
              tooltips: {
                enabled: false
              },
              elements: {
                point: {
                  radius: 0,
                  hoverRadius: 0
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
                    labelString: 'Thousands'
                  },
                  stacked: true,
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