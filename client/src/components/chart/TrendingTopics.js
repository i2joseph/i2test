// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { Radar }  from 'react-chartjs-2';



// class TrendingTopics extends Component {

//   getLabelList() {
//     if(!this.props.allTopics) {
//       return [];
//     }
//     return this.props.allTopics.map((eachTopic) => {
//       return eachTopic.topic;
//     })
//   }

//   getDataList() {
//     if(!this.props.allTopics) {
//       return [];
//     }
//     return this.props.allTopics.map((eachTopic) => {
//       return eachTopic.totalarticles;
//     })
//   }

//   render() {
//     // console.log("ALLTOPICS: ", this.props.allTopics);
//     let labelList = this.getLabelList();
//     let dataList = this.getDataList();

//     let data = {
//       labels: labelList,
//       datasets: [
//         { 
//           label: this.props.currentNews ? this.props.currentNews.topic : null,
//           backgroundColor: 'rgba(255, 0, 0, 0.2)',
//           borderColor: 'rgba(255, 0, 0, 1)',
//           pointBackgroundColor: 'rgb(255, 0, 0)',
//           data: dataList
//         }
//       ]
//     };

//     return (
//       <Radar id="radar1" data={data} width={500} height={500} options={{
//         elements: {
//           point: {
//             radius: 2,
//             hoverRadius: 2
//           }
//         },
//         legend: {
//           display: {true}
//         },
//         scale: {
//           ticks: {
//             display: true,
//             min: -1,
//             max: 9
//           }, 
//           pointLabels: {
//             fontSize: 12
//           } 
//         },
//         maintainAspectRatio: false
//         }}
//       />
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     currentNews: state.currentNews.currentNews,
//     allTopics: state.allTopics.allTopics
//   };
// };

// export default connect(mapStateToProps)(TrendingTopics);
