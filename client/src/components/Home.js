import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import TrendingTopics from './TrendingTopics';
import TrendingTopics from './RadarChart';
import TrendingCompanies from './RadarChart';
import LatestNews from './LatestNews'
import RetailEmployment from './RetailEmployment';
import RetailSales from './RetailSales';
import { getIntel } from '../actions/index';

import { getTopicsLabelList, getCompaniesLabelList, getDataList, getBarDatasets, getLineLabels } from '../utils/helper';

class Home extends Component {

  // fetch all intel while passing current news counter as parameter to acquire current news to display
  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

  render() {

    let topicsLabelList = getTopicsLabelList(this.props.allTopics);
    let topicsDataList = getDataList(this.props.allTopics);

    let companiesLabelList = getCompaniesLabelList(this.props.companies);
    let companiesDataList = getDataList(this.props.companies);

    let employmentDatasets = getBarDatasets(this.props.retailEmployment);

    let salesLabels = getLineLabels(this.props.retailSales);

    let salesData = this.props.retailSales ? this.props.retailSales.data[0] : []

    // console.log("LENGTH: ", this.props.retailSales ? this.props.retailSales.data[0] : null)

    return (
      <div>
        react app
        <RetailSales
          labels={salesLabels}
          data={salesData}
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
    retailEmployment: state.retailEmployment.retailEmployment,
    retailSales: state.retailSales.retailSales
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getIntel }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);