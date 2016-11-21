import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';

import { getTableData, selectPage } from '../actions/index';

class TableHome extends Component {

  componentWillMount() {
    this.props.getTableData();
  }

  handleSelect(eventKey) {
    this.props.selectPage(eventKey);
  }

  render() {
    console.log("TABLE DATA: ", this.props.allTableData);
    if(this.props.allTableData) {
      console.log("TABLE DATA: ", this.props.allTableData);
      console.log("TABLE length: ", this.props.allTableData.length);
      console.log("TABLE page: ", this.props.allTableData.length / 15);
    }
    // console.log("TOTAL PAGES: ", this.props.allTableData.length / 15)
    console.log("CURRENT PAGE: ", this.props.activePage);

    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.props.activePage ? this.props.activePage : 1}
        onSelect={this.handleSelect.bind(this)} 
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage.activePage,
    allTableData: state.allTableData.allTableData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTableData, selectPage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHome);