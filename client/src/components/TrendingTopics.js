import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Radar }  from 'react-chartjs-2';



class TrendingTopics extends Component {

  getLabelList() {
    if(!this.props.allTopics) {
      return [];
    }
    return this.props.allTopics.map((eachTopic) => {
      return eachTopic.topic;
    })
  }

  getDataList() {
    if(!this.props.allTopics) {
      return [];
    }
    return this.props.allTopics.map((eachTopic) => {
      return eachTopic.totalarticles;
    })
  }

  render() {
    // console.log("ALLTOPICS: ", this.props.allTopics);
    let labelList = this.getLabelList();
    let dataList = this.getDataList();

    let data = {
      labels: labelList,
      datasets: [
        {
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 0, 0, 1)',
          data: dataList
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
}

const mapStateToProps = (state) => {
  return {
    allTopics: state.allTopics.allTopics
  }
}

export default connect(mapStateToProps)(TrendingTopics);
