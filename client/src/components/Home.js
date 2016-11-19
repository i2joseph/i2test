import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TrendingTopics from './RadarChart';
import TrendingCompanies from './RadarChart';
import LatestNews from './LatestNews'
import { getIntel } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

  getTopicsLabelList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.topic;
    })
  }

  getDataList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.totalarticles;
    })
  }

  getCompaniesLabelList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.company;
    })
  }


  render() {

    let topicsLabelList = this.getTopicsLabelList(this.props.allTopics);
    let topicsDataList = this.getDataList(this.props.allTopics);

    let companiesLabelList = this.getCompaniesLabelList(this.props.companies);
    let companiesDataList = this.getDataList(this.props.companies);

    return (
      <div>
        <div>
        <TrendingTopics 
            topicsLabel={topicsLabelList}
            topicsData={topicsDataList}
            backgroundColor={'rgba(255, 0, 0, 0.2)'}
            borderColor={'rgba(255, 0, 0, 1)'}
            pointBackgroundColor={'rgba(255, 0, 0, 1)'}
            pointBorderColor={'#fff'}
            pointHoverBackgroundColor={'#fff'}
            pointHoverBorderColor={'rgba(255, 0, 0, 1)'}
            min={-1}
            max={9}
          />
        </div>
        <div>
           <TrendingCompanies 
            topicsLabel={companiesLabelList}
            topicsData={companiesDataList}
            backgroundColor={'rgba(0, 0, 255, 0.2)'}
            borderColor={'rgba(0, 0, 255, 1)'}
            pointBackgroundColor={'rgba(0, 0, 255, 1)'}
            pointBorderColor={'#fff'}
            pointHoverBackgroundColor={'#fff'}
            pointHoverBorderColor={'rgba(0, 0, 255, 1)'}
            min={-1}
            max={5}
          />
        </div>
      </div>
    )
  }
};

/************ component placeholder *************/

        // <LatestNews />
        // 
        // <TrendingTopics 
        //   topicsLabel={topicsLabelList}
        //   topicsData={topicsDataList}
        //   backgroundColor={'rgba(255, 0, 0, 0.2)'}
        //   borderColor={'rgba(255, 0, 0, 1)'}
        //   pointBackgroundColor={'rgba(255, 0, 0, 1)'}
        //   pointBorderColor={'#fff'}
        //   pointHoverBackgroundColor={'#fff'}
        //   pointHoverBorderColor={'rgba(255, 0, 0, 1)'}
        //   min={-1}
        //   max={9}
        // />

/***************************/

const mapStateToProps = (state) => {
  // console.log("CURRENTNEWS: ", state.currentNews.currentNews)
  // console.log("COMPANIES: ", state.companies.companies)
  return {
    allTopics: state.allTopics.allTopics,
    companies: state.companies.companies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getIntel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);