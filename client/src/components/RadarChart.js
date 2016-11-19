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
    <Radar id="radar1" data={data} width={500} height={500} options={{
      legend: {
        display: false
      },
      scale: {
        ticks: {
          display: true,
          min: -1,
          max: 9
        }, 
        pointLabels: {
          fontSize: 12
        } 
      },
      tooltip: {
        intersect: false
      },
      maintainAspectRatio: false
      }}
    />
  )
}

export default RadarChart