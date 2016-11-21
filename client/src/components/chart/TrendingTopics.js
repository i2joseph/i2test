import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopicsHeader from './TopicsHeader';

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
    let labelList = this.getLabelList();
    let dataList = this.getDataList();

    let data = {
      labels: labelList,
      datasets: [
        { 
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          pointBackgroundColor: this.props.pointBackgroundColor,
          pointBorderColor: this.props.pointBorderColor,
          pointHoverBackgroundColor: this.props.pointHoverBackgroundColor,
          pointHoverBorderColor: this.props.pointHoverBorderColor,
          data: dataList
        }
      ]
    };

    return (
      <div>
        <TopicsHeader />
        <Radar id="radar1" data={data} width={550} height={550} options={{
          legend: {
            display: false
          },
          scale: {
            ticks: {
              min: this.props.min,
              max: this.props.max
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
}

const mapStateToProps = (state) => {
  return {
    allTopics: state.allTopics.allTopics
  };
};

export default connect(mapStateToProps)(TrendingTopics);
