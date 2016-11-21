import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

import SearchCompanyList from './SearchCompanyList';

class SearchCompany extends Component {

  renderList() {
    if(!this.props.companyList) {
      return (
        <div>
        </div>
      )
    }

    return this.props.companyList.map((eachCompany, index) => {
      return (
        <SearchCompanyList
          key={index}
          menuItem={eachCompany}
        />
      )
    })
  }

  render() {
    return (
      <ButtonToolbar>
        <DropdownButton id="dropdown-size-medium" title={this.props.searchCompany ? this.props.searchCompany : "Search Company"} >
          {this.renderList()}
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyList: state.search.company,
    searchCompany: state.searchCompany.searchCompany
  }
}


export default connect(mapStateToProps)(SearchCompany);