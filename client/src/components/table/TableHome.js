import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Pagination, Button } from 'react-bootstrap';

import SearchCompany from './SearchCompany';
import SearchCountry from './SearchCountry';
import SearchSector from './SearchSector';
import Table from './Table';

import { getTableInfo, selectPage, searchTable } from '../../actions/index';

class TableHome extends Component {

  componentWillMount() {
    this.props.getTableInfo();
  }

  handleSelect(eventKey) {
    this.props.selectPage(eventKey);
  }

  getTotalPages(data) {
    if(!data) {
      return 1;
    }
    let totalPages = Math.ceil(this.props.tableData.length / 15);

    return totalPages;
  }

  renderTable(items) {
    if(!this.props.tableData) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <Table />
        </div>

        <div>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={items}
            maxButtons={5}
            activePage={this.props.activePage ? this.props.activePage : 1}
            onSelect={this.handleSelect.bind(this)} 
          />
        </div>
      </div>
    )
  }

  render() {
    let items = this.getTotalPages(this.props.tableData);

    // disable button if company, country, or sector field isn't selected
    let disableButton = !this.props.searchCompany || !this.props.searchCountry || !this.props.searchSector

    return (
      <div>
        <div id="search">
          <SearchCompany />
          <SearchCountry />
          <SearchSector />
          <Button bsStyle="primary" disabled={disableButton} onClick={() => {this.props.searchTable(this.props.searchCompany, this.props.searchCountry, this.props.searchSector)}}>SEARCH</Button>
        </div>
        <div id="table">
          {this.renderTable(items)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage.activePage,
    tableData: state.tableData.tableData,
    searchCompany: state.searchCompany.searchCompany,
    searchCountry: state.searchCountry.searchCountry,
    searchSector: state.searchSector.searchSector
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTableInfo, selectPage, searchTable }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHome);