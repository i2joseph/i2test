import React, { Component } from 'react';

import { Radar }  from 'react-chartjs-2';

const RadarChart = (props) => {

  let data = {
    labels: props.topicsLabel,
    datasets: [
      { 
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        pointBackgroundColor: props.pointBackgroundColor,
        pointBorderColor: props.pointBorderColor,
        pointHoverBackgroundColor: props.pointHoverBackgroundColor,
        pointHoverBorderColor: props.pointHoverBorderColor,
        data: props.topicsData
      }
    ]
  };

  return (
    <div>
      <h3>{props.header}</h3>
      <Radar id="radar1" data={data} width={550} height={550} options={{
        legend: {
          display: false
        },
        scale: {
          ticks: {
            min: props.min,
            max: props.max
          }, 
          pointLabels: {
            fontSize: 12
          } 
        },
        maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default RadarChart;