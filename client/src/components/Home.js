import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import TrendingTopics from './TrendingTopics';
import TrendingTopics from './RadarChart';
import TrendingCompanies from './RadarChart';
import LatestNews from './LatestNews'
import RetailEmployment from './RetailEmployment';
import { getIntel } from '../actions/index';

class Home extends Component {

  // fetch all intel while passing current news counter as parameter to acquire current news to display
  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

/******************** RADAR CHART ********************/

  // list all topics in array
  getTopicsLabelList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.topic;
    });
  }

  // list all companies in array
  getCompaniesLabelList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.company;
    });
  }

  // list all data info (totalarticles) in an array (topics & companies)
  getDataList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.totalarticles;
    });
  }

/******************** BAR CHART ********************/
  getBarDatasets(data) {
    if(!data) {
      return [];
    }

    let backgroundColor = ['rgb(204, 204, 204)', 'rgb(181, 208, 238)', 'rgb(247, 210, 171)', 'rgb(206,235,165)', 'rgb(255, 165, 67)'];

    let dataReformat = data.map((eachData) => {
      return {
        type: 'bar',
        label: eachData.shortname,
        data: [eachData.prv_yr, eachData.prv_val, eachData.val],
      };
    })

    for(let i = 0; i < dataReformat.length; i++) {
      dataReformat[i].backgroundColor = backgroundColor[i];
    }

    return dataReformat;
  }

/******************** LINE CHART ********************/

  render() {

    let topicsLabelList = this.getTopicsLabelList(this.props.allTopics);
    let topicsDataList = this.getDataList(this.props.allTopics);

    let companiesLabelList = this.getCompaniesLabelList(this.props.companies);
    let companiesDataList = this.getDataList(this.props.companies);

    let employmentDatasets = this.getBarDatasets(this.props.retailEmployment);

    console.log("EMPLOYMENT: ", employmentDatasets);

    return (
      <div>
        react app
        <RetailEmployment
          datasets={employmentDatasets}
        />
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
        // 
        // <TrendingCompanies 
        //   topicsLabel={companiesLabelList}
        //   topicsData={companiesDataList}
        //   backgroundColor={'rgba(0, 0, 255, 0.2)'}
        //   borderColor={'rgba(0, 0, 255, 1)'}
        //   pointBackgroundColor={'rgba(0, 0, 255, 1)'}
        //   pointBorderColor={'#fff'}
        //   pointHoverBackgroundColor={'#fff'}
        //   pointHoverBorderColor={'rgba(0, 0, 255, 1)'}
        //   min={-1}
        //   max={5}
        // />

        // <RetailEmployment
        //   datasets={employmentDatasets}
        // />

/***************************/

const mapStateToProps = (state) => {
  // console.log("CURRENTNEWS: ", state.currentNews.currentNews)
  // console.log("COMPANIES: ", state.companies.companies)
  return {
    allTopics: state.allTopics.allTopics,
    companies: state.companies.companies,
    retailEmployment: state.retailEmployment.retailEmployment
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getIntel }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);